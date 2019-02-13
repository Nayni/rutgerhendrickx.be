import React from "react";

import { graphql } from "gatsby";
import { FluidObject } from "gatsby-image";

import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Paper from "@material-ui/core/Paper";
import { styled } from "@material-ui/styles";

import Section, { SectionTitle } from "../Section";
import ContactForm from "./ContactForm";
import ContactImage from "./ContactImage";

interface ContactProps {
  contactImage: FluidObject;
}

const ContactPaper = styled(Paper)({
  width: "100%",
  height: "100%"
});

const Content = styled("div")({
  padding: "16px",
  width: "100%"
});

const Contact: React.FC<ContactProps> = ({ contactImage }) => {
  return (
    <Section>
      <SectionTitle>Contact</SectionTitle>
      <Grid container spacing={16}>
        <Grid item xs={12} md={6}>
          <ContactPaper>
            <Content>
              <ContactForm />
            </Content>
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

export interface ContactImageFragmentProps {
  contactImage: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

export const CONTACT_IMAGE_FRAGMENT = graphql`
  fragment ContactImageFragment on Query {
    contactImage: file(relativePath: { eq: "mailbox.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Contact;
