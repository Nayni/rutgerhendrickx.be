import React from "react";

import cx from "classnames";

import { Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

interface HeroTextProps {
  className?: string;
  children?: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    fontSize: "24px",
    fontWeight: 500,
    color: theme.palette.common.white
  }
}));

const HeroText: React.FC<HeroTextProps> = ({ className, children }) => {
  const classes = useStyles();

  return (
    <Typography className={cx(classes.text, className)} variant="h1">
      {children}
    </Typography>
  );
};

export default HeroText;
