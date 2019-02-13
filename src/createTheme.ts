import { createMuiTheme } from "@material-ui/core/styles";

import blueGrey from "@material-ui/core/colors/blueGrey";
import pink from "@material-ui/core/colors/pink";

export const createTheme = () =>
  createMuiTheme({
    palette: {
      primary: {
        light: blueGrey[100],
        main: blueGrey[500],
        dark: blueGrey[700]
      },
      secondary: {
        light: pink[100],
        main: pink[500],
        dark: pink[700]
      }
    },
    typography: {
      useNextVariants: true
    }
  });
