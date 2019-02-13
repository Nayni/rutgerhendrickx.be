import React from "react";

import { graphql } from "gatsby";

import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { styled } from "@material-ui/styles";

import Section, { SectionTitle } from "../Section";

interface IntroductionProps {
  description: string[];
}

const IntroPaper = styled(Paper)({
  width: "100%"
});

const PaperContent = styled("div")({
  padding: "16px",
  width: "100%"
});

const IntroTypography = styled(Typography)({
  marginBottom: "10px",
  "&:last-child": {
    marginBottom: "0px"
  }
});

const Introduction: React.FC<IntroductionProps> = ({ description }) => {
  return (
    <Section>
      <SectionTitle>Hey there!</SectionTitle>
      <IntroPaper>
        <PaperContent>
          {description.map((paragraph, i) => (
            <IntroTypography key={`intro-paragraph-${i}`}>
              {paragraph}
            </IntroTypography>
          ))}
        </PaperContent>
        <Divider />
        <PaperContent>
          <Grid container justify="center" spacing={8}>
            <Grid item>
              <Button color="secondary" variant="contained">
                Download CV
              </Button>
            </Grid>
            <Grid item>
              <Button color="secondary" variant="outlined">
                Contact Me
              </Button>
            </Grid>
          </Grid>
        </PaperContent>
      </IntroPaper>
    </Section>
  );
};

export interface IntroductionFragmentProps {
  description: string[];
}

export const INTRODUCTION_FRAGMENT_QUERY = graphql`
  fragment IntroductionFragment on IntroductionJson {
    id
    description
  }
`;

export default Introduction;
