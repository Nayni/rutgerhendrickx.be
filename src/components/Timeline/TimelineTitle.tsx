import React from "react";

import cx from "classnames";

import { Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

interface TimelineTitleProps {
  className?: string;
  children?: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontSize: "18px",
    fontWeight: 500
  }
}));

const TimelineTitle: React.FC<TimelineTitleProps> = ({
  className,
  children
}) => {
  const classes = useStyles();

  return (
    <Typography className={cx(classes.title, className)}>{children}</Typography>
  );
};

export default TimelineTitle;
