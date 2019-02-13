import React from "react";

import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";

export interface TimelineVisualProps {
  width: number;
}

interface TimelineProps {
  children?: React.ReactNode;
}

type AllProps = TimelineProps & TimelineVisualProps;

const useStyles = makeStyles((theme: Theme) => ({
  timeline: ({ width }: TimelineVisualProps) => ({
    position: "relative",
    paddingTop: "16px",
    "&:before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: "28px",
      height: "100%",
      width: `${width}px`,
      background: `${theme.palette.primary.light}`,
      [theme.breakpoints.up("md")]: {
        left: "50%",
        marginLeft: `${-1 * (width / 2)}px`
      }
    }
  })
}));

const Timeline: React.FC<AllProps> = ({ children, width }) => {
  const classes = useStyles({ width });

  return <div className={classes.timeline}>{children}</div>;
};

export default Timeline;
