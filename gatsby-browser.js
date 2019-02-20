const React = require("react");
const ReactDOM = require("react-dom");

const {
  createGenerateClassName,
  StylesProvider,
  ThemeProvider,
  install
} = require("@material-ui/styles");

// Install the new styling solution of material-ui/styles.
// This step is temporary until the core library ships with the new solution by default.
// We have to do this before we import any material-ui components to ensure the engine is swapped and styles are applied correctly.
install();

const CssBaseline = require("@material-ui/core/CssBaseline").default;
const SnackbarProvider = require("notistack").SnackbarProvider;
const { createTheme } = require("./src/createTheme");

const onInitialClientRender = () => {
  // Remove the server-side injected CSS.
  const ssStyles = window.document.getElementById("server-side-jss");
  ssStyles && ssStyles.parentNode.removeChild(ssStyles);
};

// We removed the server-side injected CSS.
// So we have to re-render on the client using the same settings as the server.
// We wrap the root elemement again in the correct providers.
const wrapRootElement = ({ element }, options) => {
  const generateClassName = createGenerateClassName({
    dangerouslyUseGlobalCSS: false,
    productionPrefix: "jss",
    seed: ""
  });

  const theme = createTheme();

  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <React.Fragment>
            <CssBaseline />
            {element}
          </React.Fragment>
        </SnackbarProvider>
      </ThemeProvider>
    </StylesProvider>
  );
};

// Wrap the hydrate function to aid in HMR in development mode.
// This still doesn't fix the styles HMR completely though
// See: https://github.com/gatsbyjs/gatsby/issues/8237
const replaceHydrateFunction = () => {
  return (element, container, callback) => {
    ReactDOM.render(element, container, callback);
  };
};

exports.onInitialClientRender = onInitialClientRender;
exports.wrapRootElement = wrapRootElement;
exports.replaceHydrateFunction = replaceHydrateFunction;
