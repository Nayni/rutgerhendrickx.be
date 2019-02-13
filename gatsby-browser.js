const React = require("react");
const ReactDOM = require("react-dom");

const {
  createGenerateClassName,
  StylesProvider,
  ThemeProvider,
  install
} = require("@material-ui/styles");

install();

const CssBaseline = require("@material-ui/core/CssBaseline").default;
const { createTheme } = require("./src/createTheme");

const onInitialClientRender = () => {
  // Remove the server-side injected CSS.
  const ssStyles = window.document.getElementById("server-side-jss");
  ssStyles && ssStyles.parentNode.removeChild(ssStyles);
};

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
        <CssBaseline />
        {element}
      </ThemeProvider>
    </StylesProvider>
  );
};

const replaceHydrateFunction = () => {
  return (element, container, callback) => {
    ReactDOM.render(element, container, callback);
  };
};

exports.onInitialClientRender = onInitialClientRender;
exports.wrapRootElement = wrapRootElement;
exports.replaceHydrateFunction = replaceHydrateFunction;
