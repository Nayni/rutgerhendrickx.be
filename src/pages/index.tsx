import React from "react";

import { graphql } from "gatsby";

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
import Page, { PageContent } from "../components/Page";
import { ProfileImageFragmentProps } from "../components/ProfilePicture";
import { useFormCarry } from "../utils";

interface IndexQueryProps {
  data: HeroImageFragmentProps &
    ProfileImageFragmentProps &
    ContactImageFragmentProps & {
      allIntroductionJson: {
        edges: Array<{
          node: IntroductionFragmentProps & {
            name: string;
            title: string;
            email: string;
            github: string;
            linkedin: string;
          };
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
  const handleFormcarrySubmit = useFormCarry<ContactFormValues>();

  const introduction = allIntroductionJson.edges[0].node;
  const certifications = allCertificationsJson.edges.map(edge => edge.node);
  const educations = allEducationJson.edges.map(edge => edge.node);
  const experiences = allExperiencesJson.edges.map(edge => edge.node);

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
        heroText={introduction.name}
        heroSubText={introduction.title}
        heroImage={heroImage.childImageSharp.fluid}
        profileImage={profileImage.childImageSharp.fluid}
        mailto={`mailto:${introduction.email}`}
        linkedin={introduction.linkedin}
        github={introduction.github}
      />
      <PageContent>
        <Introduction description={introduction.description} />
        <Experience experiences={experiences} />
        <Certifications certifications={certifications} />
        <Education educations={educations} />
        <Contact
          contactImage={contactImage.childImageSharp.fluid}
          onSubmitForm={handleFormcarrySubmit}
        />
      </PageContent>
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
          name
          title
          email
          linkedin
          github
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
