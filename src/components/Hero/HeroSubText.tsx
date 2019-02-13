import React from "react";

import cx from "classnames";

import { Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

interface HeroSubTextProps {
  className?: string;
  children?: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    fontSize: "20px",
    color: theme.palette.common.white
  }
}));

const HeroSubText: React.FC<HeroSubTextProps> = ({ className, children }) => {
  const classes = useStyles();

  return (
    <Typography className={cx(classes.text, className)} variant="h2">
      {children}
    </Typography>
  );
};

export default HeroSubText;
