import React from "react";

import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";

import GithubIcon from "../icons/GithubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import MailIcon from "../icons/MailIcon";

export interface HeaderSocialsProps {
  mailto: string;
  linkedin: string;
  github: string;
}

const HeaderSocials: React.FC<HeaderSocialsProps> = ({
  mailto,
  linkedin,
  github
}) => {
  return (
    <div>
      <Grid container spacing={8}>
        <Grid item>
          <Fab component="a" href={mailto} target="_blank">
            <MailIcon />
          </Fab>
        </Grid>
        <Grid item>
          <Fab component="a" href={linkedin} target="_blank">
            <LinkedInIcon />
          </Fab>
        </Grid>
        <Grid item>
          <Fab component="a" href={github} target="_blank">
            <GithubIcon />
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeaderSocials;
