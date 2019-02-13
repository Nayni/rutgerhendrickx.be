const React = require("react");

const {
  createGenerateClassName,
  StylesProvider,
  ThemeProvider,
  install
} = require("@material-ui/styles");

install();

const CssBaseline = require("@material-ui/core/CssBaseline").default;
const { SheetsRegistry } = require("jss");

const { createTheme } = require("./src/createTheme");

const sheetsRegistryMap = new Map();

const wrapRootElement = ({ element, pathname }) => {
  const generateClassName = createGenerateClassName({
    dangerouslyUseGlobalCSS: false,
    productionPrefix: "jss",
    seed: ""
  });

  const sheetsRegistry = new SheetsRegistry();
  sheetsRegistryMap.set(pathname, sheetsRegistry);

  const sheetsManager = new Map();

  const theme = createTheme();

  return (
    <StylesProvider
      sheetsRegistry={sheetsRegistry}
      sheetsManager={sheetsManager}
      generateClassName={generateClassName}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {element}
      </ThemeProvider>
    </StylesProvider>
  );
};

const onRenderBody = ({ setHeadComponents, pathname }) => {
  const sheetsRegistry = sheetsRegistryMap.get(pathname);

  if (sheetsRegistry) {
    setHeadComponents([
      <style
        type="text/css"
        id="server-side-jss"
        key="server-side-jss"
        dangerouslySetInnerHTML={{ __html: sheetsRegistry.toString() }}
      />
    ]);

    sheetsRegistryMap.delete(pathname);
  }
};

exports.wrapRootElement = wrapRootElement;
exports.onRenderBody = onRenderBody;
