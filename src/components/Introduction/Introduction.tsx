import React from "react";

import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

import Section, { SectionTitle } from "../Section";
import IntroductionPaper from "./IntroductionPaper";
import IntroductionPaperContent from "./IntroductionPaperContent";
import IntroductionParagraph from "./IntroductionParagraph";

export interface IntroductionFragmentProps {
  description: string[];
}

interface IntroductionProps {
  description: string[];
}

const Introduction: React.FC<IntroductionProps> = ({ description }) => {
  return (
    <Section>
      <SectionTitle>Hey there!</SectionTitle>
      <IntroductionPaper>
        <IntroductionPaperContent>
          {description.map((paragraph, i) => (
            <IntroductionParagraph key={`intro-paragraph-${i}`}>
              {paragraph}
            </IntroductionParagraph>
          ))}
        </IntroductionPaperContent>
        <Divider />
        <IntroductionPaperContent>
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
        </IntroductionPaperContent>
      </IntroductionPaper>
    </Section>
  );
};

export default Introduction;
