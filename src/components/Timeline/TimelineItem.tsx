import React from "react";

import Paper from "@material-ui/core/Paper";
import { Theme } from "@material-ui/core/styles";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import { Check } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

interface TimelineItemProps {
  children: React.ReactNode;
  period: React.ReactNode;
  icon?: React.ComponentType<SvgIconProps>;
}

const useStyles = makeStyles((theme: Theme) => ({
  timelineEntry: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: theme.spacing.unit * 5,
    [theme.breakpoints.up("md")]: {
      flexWrap: "nowrap",
      alignItems: "flex-start",
      justifyContent: "space-between"
    },
    "&:last-child": {
      marginBottom: 0
    },
    "&:nth-child(odd)": {
      "& $timelineContent": {
        [theme.breakpoints.up("md")]: {
          order: -1
        }
      },
      "& $timelinePeriod": {},
      "& $timelinePoint": {
        "&:before": {
          left: "20px",
          right: "auto",
          [theme.breakpoints.up("md")]: {
            right: "20px",
            left: "auto"
          }
        }
      }
    },
    "&:nth-child(even)": {
      "& $timelineContent": {},
      "& $timelinePeriod": {
        [theme.breakpoints.up("md")]: {
          order: -1,
          justifyContent: "flex-end"
        }
      },
      "& $timelinePoint": {
        "&:before": {
          left: "20px",
          rigth: "auto"
        }
      }
    }
  },
  timelineContent: {
    marginBottom: theme.spacing.unit * 2,
    width: `calc(100% - ${theme.spacing.unit * 10}px)`,
    marginLeft: theme.spacing.unit * 10,
    [theme.breakpoints.up("md")]: {
      width: `calc(50% - ${theme.spacing.unit * 5}px)`,
      marginLeft: 0,
      marginBottom: 0
    }
  },
  timelinePeriod: {
    display: "flex",
    width: `calc(100% - ${theme.spacing.unit * 10}px)`,
    marginLeft: theme.spacing.unit * 10,
    [theme.breakpoints.up("md")]: {
      alignItems: "center",
      minHeight: theme.spacing.unit * 6,
      width: `calc(50% - ${theme.spacing.unit * 5}px)`,
      marginLeft: "0px"
    }
  },
  timelinePoint: {
    position: "absolute",
    top: "0px",
    left: "10px",
    height: "40px",
    width: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.primary.main,
    borderRadius: "50%",
    boxShadow: theme.shadows[2],
    color: theme.palette.common.white,
    [theme.breakpoints.up("md")]: {
      left: "50%",
      marginLeft: "-20px"
    },
    "&:before": {
      content: '""',
      position: "absolute",
      top: "15px",
      height: "8px",
      width: "50px",
      background: `${theme.palette.primary.light}`,
      zIndex: -1
    }
  },
  paper: {
    borderLeft: `5px solid ${theme.palette.secondary.main}`
  }
}));

const TimelineItem: React.FC<TimelineItemProps> = ({
  icon: Icon = Check,
  period,
  children
}) => {
  const classes = useStyles();

  return (
    <div className={classes.timelineEntry}>
      <div className={classes.timelinePoint}>
        <Icon />
      </div>
      <div className={classes.timelineContent}>
        <Paper className={classes.paper}>{children}</Paper>
      </div>
      <div className={classes.timelinePeriod}>{period}</div>
    </div>
  );
};

export default TimelineItem;
