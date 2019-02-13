import React from "react";

import cx from "classnames";

import { Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

interface TimelineSubTitleProps {
  className?: string;
  children?: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontSize: "16px",
    fontWeight: 400
  }
}));

const TimelineSubTitle: React.FC<TimelineSubTitleProps> = ({
  className,
  children
}) => {
  const classes = useStyles();

  return (
    <Typography className={cx(classes.title, className)}>{children}</Typography>
  );
};

export default TimelineSubTitle;
