import React from "react";

import { FluidObject } from "gatsby-image";

import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import Section, { SectionTitle } from "../Section";
import ContactForm from "./ContactForm";
import ContactImage from "./ContactImage";
import ContactPaper from "./ContactPaper";
import ContactPaperContent from "./ContactPaperContent";

export interface ContactImageFragmentProps {
  contactImage: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

interface ContactProps {
  contactImage: FluidObject;
}

const Contact: React.FC<ContactProps> = ({ contactImage }) => {
  return (
    <Section>
      <SectionTitle>Contact</SectionTitle>
      <Grid container spacing={16}>
        <Grid item xs={12} md={6}>
          <ContactPaper>
            <ContactPaperContent>
              <ContactForm />
            </ContactPaperContent>
          </ContactPaper>
        </Grid>
        <Hidden only={["xs"]}>
          <Grid item md={6}>
            <ContactPaper>
              <ContactImage fluid={contactImage} />
            </ContactPaper>
          </Grid>
        </Hidden>
      </Grid>
    </Section>
  );
};

export default Contact;
