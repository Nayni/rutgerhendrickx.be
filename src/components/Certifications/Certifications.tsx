import React from "react";

import cx from "classnames";
import { graphql } from "gatsby";

import Grid from "@material-ui/core/Grid";
import { Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

import CertificateIcon from "../icons/CertificateIcon";
import Section, { SectionTitle } from "../Section";
import CertificationCard from "./CertificationCard";

interface CertificationsProps {
  certifications: CertificationFragmentProps[];
}

const useStyles = makeStyles((theme: Theme) => ({
  nameText: {
    fontWeight: 500
  },
  overline: {
    lineHeight: "inherit"
  },
  authorityText: {
    fontWeight: 500
  },
  dateText: {
    marginTop: "10px"
  }
}));

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  const classes = useStyles();

  return (
    <Section>
      <SectionTitle>Certifications</SectionTitle>
      <Grid container spacing={16}>
        {certifications.map((certification, index) => (
          <Grid key={`certification-${index}`} item xs={12} md={6}>
            <CertificationCard icon={CertificateIcon}>
              <Typography className={classes.nameText}>
                {certification.name}
              </Typography>
              <Typography
                className={cx(classes.authorityText, classes.overline)}
                variant="overline"
              >
                {certification.authority}
              </Typography>
              <Typography
                className={cx(classes.dateText, classes.overline)}
                variant="overline"
              >
                {certification.date}
              </Typography>
            </CertificationCard>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export interface CertificationFragmentProps {
  id: string;
  name: string;
  authority: string;
  date: string;
}

export const CERTIFICATION_FRAGMENT_QUERY = graphql`
  fragment CertificationFragment on CertificationsJson {
    id
    name
    authority
    date(formatString: "MMMM YYYY")
  }
`;

export default Certifications;
