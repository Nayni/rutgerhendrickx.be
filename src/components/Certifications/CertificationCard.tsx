import React from "react";

import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import { Theme } from "@material-ui/core/styles";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import { makeStyles, styled } from "@material-ui/styles";

interface CertificationCardProps {
  icon: React.ComponentType<SvgIconProps>;
  children?: React.ReactNode;
}

const Card = styled(Paper)({
  minHeight: "100%"
});

const IconContainer = styled("div")({
  width: "100%",
  height: "100px",
  display: "flex",
  justifyContent: "center"
});

const Content = styled("div")({
  padding: "16px"
});

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    minHeight: "100%",
    minWidth: "100%",
    color: theme.palette.secondary.light
  }
}));

const CertificationCard: React.FC<CertificationCardProps> = ({
  icon: Icon,
  children
}) => {
  const classes = useStyles();

  return (
    <Card>
      <IconContainer>
        <Icon className={classes.icon} />
      </IconContainer>
      <Divider />
      <Content>{children}</Content>
    </Card>
  );
};

export default CertificationCard;
