import React from "react";

import { FluidObject } from "gatsby-image";

import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import ContactForm, { ContactFormProps } from "./ContactForm";
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

type AllProps = ContactProps & ContactFormProps;

const Contact: React.FC<AllProps> = ({ contactImage, onSubmitForm }) => {
  return (
    <Grid container spacing={16}>
      <Grid item xs={12} md={6}>
        <ContactPaper>
          <ContactPaperContent>
            <ContactForm onSubmitForm={onSubmitForm} />
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
  );
};

export default Contact;
