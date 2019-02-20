import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Menu } from "@material-ui/icons";
import { makeStyles, styled } from "@material-ui/styles";

interface StickyHeaderProps {
  onMenuClick: () => void;
}

const StickyToolbar = styled(Toolbar)({
  minHeight: "48px",
  height: "48px",
  textAlign: "center"
});

const StickyTypography = styled(Typography)({
  textTransform: "uppercase",
  fontWeight: 500,
  letterSpacing: "4px"
});

const useStyles = makeStyles((theme: Theme) => ({
  highlight: {
    color: theme.palette.secondary.main,
    fontSize: "18px"
  }
}));

const StickyHeader: React.FC<StickyHeaderProps> = ({ onMenuClick }) => {
  const classes = useStyles();
  return (
    <AppBar color="default" position="fixed">
      <StickyToolbar>
        <Grid container>
          <Grid container item xs={4} justify="flex-start">
            <IconButton color="secondary" onClick={onMenuClick}>
              <Menu />
            </IconButton>
          </Grid>
          <Grid container item xs={4} justify="center" alignItems="center">
            <StickyTypography>
              <span className={classes.highlight}>r</span>utger
              <span className={classes.highlight}>h</span>endrickx.be
            </StickyTypography>
          </Grid>
          <Grid item xs={4} />
        </Grid>
      </StickyToolbar>
    </AppBar>
  );
};

export default StickyHeader;
