import React from "react";

import { graphql } from "gatsby";

import { styled } from "@material-ui/styles";

import Certifications, {
  CertificationFragmentProps
} from "../components/Certifications";
import Contact, {
  ContactFormValues,
  ContactImageFragmentProps
} from "../components/Contact";
import Education, { EducationFragmentProps } from "../components/Education";
import Experience, { ExperienceFragmentProps } from "../components/Experience";
import Header from "../components/Header";
import { HeroImageFragmentProps } from "../components/Hero";
import Introduction, {
  IntroductionFragmentProps
} from "../components/Introduction";
import Page from "../components/Page";
import { ProfileImageFragmentProps } from "../components/ProfilePicture";
import { submitToFormcarry } from "../utils";

interface IndexQueryProps {
  data: HeroImageFragmentProps &
    ProfileImageFragmentProps &
    ContactImageFragmentProps & {
      allIntroductionJson: {
        edges: Array<{
          node: IntroductionFragmentProps;
        }>;
      };
      allCertificationsJson: {
        edges: Array<{
          node: CertificationFragmentProps;
        }>;
      };
      allEducationJson: {
        edges: Array<{
          node: EducationFragmentProps;
        }>;
      };
      allExperiencesJson: {
        edges: Array<{
          node: ExperienceFragmentProps;
        }>;
      };
    };
}

type IndexPageProps = IndexQueryProps;

const Content = styled("div")({
  maxWidth: "900px",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
});

const IndexPage: React.FC<IndexPageProps> = ({
  data: {
    heroImage,
    profileImage,
    contactImage,
    allIntroductionJson,
    allCertificationsJson,
    allEducationJson,
    allExperiencesJson
  }
}) => {
  const introDescription = allIntroductionJson.edges[0].node.description;
  const certifications = allCertificationsJson.edges.map(edge => edge.node);
  const educations = allEducationJson.edges.map(edge => edge.node);
  const experiences = allExperiencesJson.edges.map(edge => edge.node);

  const handleContactFormSubmit = (values: ContactFormValues) =>
    submitToFormcarry(values);

  return (
    <Page
      title="Home"
      keywords={[
        `rutger`,
        `hendrickx`,
        `rutgerhendrickx`,
        `cv`,
        `curriculum vitae`
      ]}
    >
      <Header
        heroText="Rutger Hendrickx"
        heroSubText="Full Stack Developer"
        heroImage={heroImage.childImageSharp.fluid}
        profileImage={profileImage.childImageSharp.fluid}
      />
      <Content>
        <Introduction description={introDescription} />
        <Experience experiences={experiences} />
        <Certifications certifications={certifications} />
        <Education educations={educations} />
        <Contact
          contactImage={contactImage.childImageSharp.fluid}
          onSubmitForm={handleContactFormSubmit}
        />
      </Content>
    </Page>
  );
};

export const query = graphql`
  query IndexPageQuery {
    ...HeroImageFragment
    ...ProfileImageFragment
    ...ContactImageFragment
    allIntroductionJson {
      edges {
        node {
          ...IntroductionFragment
        }
      }
    }
    allCertificationsJson(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          ...CertificationFragment
        }
      }
    }
    allEducationJson(sort: { fields: [startDate], order: DESC }) {
      edges {
        node {
          ...EducationFragment
        }
      }
    }
    allExperiencesJson(sort: { fields: [startDate], order: DESC }) {
      edges {
        node {
          ...ExperienceFragment
        }
      }
    }
  }
`;

export default IndexPage;
