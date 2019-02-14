import React from "react";
import {
  StylesProvider,
  ThemeProvider,
  createGenerateClassName,
  install
} from "@material-ui/styles";

// Install the new styling solution of material-ui/styles.
// This step is temporary until the core library ships with the new solution by default.
// We have to do this before we import any material-ui components to ensure the engine is swapped and styles are applied correctly.
install();

import { configure, addDecorator } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createTheme } from "../src/createTheme";

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /.stories.[jt]sx?$/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {}
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = "";
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname);
};

// All components are built using material-ui.
// Wrap every storyin the correct providers and ensure we have a consistent baseline to start from.
const theme = createTheme();
const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: false,
  productionPrefix: "jss",
  seed: ""
});

const storyDecorator = storyFn => (
  <StylesProvider generateClassName={generateClassName}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          width: "98%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "10px",
          marginBottom: "10px"
        }}
      >
        {storyFn()}
      </div>
    </ThemeProvider>
  </StylesProvider>
);

addDecorator(storyDecorator);

configure(loadStories, module);
