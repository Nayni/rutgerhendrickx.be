import React from "react";

import { Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  menuHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    minHeight: "auto",
    paddingBottom: "8px"
  },
  menuHeaderMainText: {
    fontSize: "16px",
    fontWeight: 500,
    color: theme.palette.secondary.main
  },
  menuHeaderSubText: {
    fontSize: "12px",
    fontWeight: 400,
    color: "#a9a9a9"
  }
}));

const MenuHeading: React.FC = () => {
  const classes = useStyles();

  return (
    <Toolbar className={classes.menuHeader}>
      <Typography className={classes.menuHeaderMainText}>
        Rutger Hendrickx
      </Typography>
      <Typography className={classes.menuHeaderSubText}>
        Curriculum Vitae
      </Typography>
    </Toolbar>
  );
};

export default MenuHeading;
