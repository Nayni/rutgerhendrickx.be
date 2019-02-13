import React from "react";

import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";

import GithubIcon from "../icons/GithubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import MailIcon from "../icons/MailIcon";

const HeaderSocials: React.FC = () => {
  return (
    <div>
      <Grid container spacing={8}>
        <Grid item>
          <Fab>
            <MailIcon />
          </Fab>
        </Grid>
        <Grid item>
          <Fab>
            <LinkedInIcon />
          </Fab>
        </Grid>
        <Grid item>
          <Fab>
            <GithubIcon />
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeaderSocials;
