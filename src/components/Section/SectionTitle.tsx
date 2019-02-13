import React from "react";

import cx from "classnames";

import { Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

interface SectionTitleProps {
  className?: string;
  children?: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    width: "100%",
    textAlign: "center",
    fontSize: "30px",
    color: theme.palette.primary.main,
    marginTop: "20px",
    marginBottom: "20px"
  }
}));

const SectionTitle: React.FC<SectionTitleProps> = ({ className, children }) => {
  const classes = useStyles();

  return (
    <Typography className={cx(classes.text, className)} variant="h3">
      {children}
    </Typography>
  );
};

export default SectionTitle;
