import React from "react";

import Grid from "@material-ui/core/Grid";

interface ExperienceChipsProps {
  children: React.ReactNode;
}

const ExperienceChips: React.FC<ExperienceChipsProps> = ({ children }) => {
  return (
    <Grid container spacing={8}>
      {React.Children.map(children, child => (
        <Grid item>{child}</Grid>
      ))}
    </Grid>
  );
};

export default ExperienceChips;
