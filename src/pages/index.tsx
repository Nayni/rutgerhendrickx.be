import React from "react";

import { graphql } from "gatsby";

import { Person, School, Timeline } from "@material-ui/icons";

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
import CertificateIcon from "../components/icons/CertificateIcon";
import MailIcon from "../components/icons/MailIcon";
import Introduction, {
  IntroductionFragmentProps
} from "../components/Introduction";
import Menu, { MenuDrawer, MenuItem, useMenuDrawer } from "../components/Menu";
import Page, { PageContent } from "../components/Page";
import { ProfileImageFragmentProps } from "../components/ProfilePicture";
import Section, { SectionTitle } from "../components/Section";
import { useAutoScrollToAnchor, useFormCarry } from "../utils";

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
  useAutoScrollToAnchor();
  const handleFormcarrySubmit = useFormCarry<ContactFormValues>();
  const { isOpen, openMenu, closeMenu } = useMenuDrawer();

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
        onMenuClick={openMenu}
      />
      <MenuDrawer isOpen={isOpen} onClose={closeMenu}>
        <Menu>
          <MenuItem
            icon={Person}
            label="Introduction"
            anchor="intro"
            beforeScrollAnimation={closeMenu}
          />
          <MenuItem
            icon={Timeline}
            label="Experience"
            anchor="experience"
            beforeScrollAnimation={closeMenu}
          />
          <MenuItem
            icon={CertificateIcon}
            label="Certifications"
            anchor="certifications"
            beforeScrollAnimation={closeMenu}
          />
          <MenuItem
            icon={School}
            label="Education"
            anchor="education"
            beforeScrollAnimation={closeMenu}
          />
          <MenuItem
            icon={MailIcon}
            label="Contact"
            anchor="contact"
            beforeScrollAnimation={closeMenu}
          />
        </Menu>
      </MenuDrawer>
      <PageContent>
        <Section id="intro">
          <SectionTitle>Hey there!</SectionTitle>
          <Introduction
            description={introduction.description}
            contactAnchor="contact"
          />
        </Section>
        <Section id="experience">
          <SectionTitle>Experience</SectionTitle>
          <Experience experiences={experiences} />
        </Section>
        <Section id="certifications">
          <SectionTitle>Certifications</SectionTitle>
          <Certifications certifications={certifications} />
        </Section>
        <Section id="education">
          <SectionTitle>Education</SectionTitle>
          <Education educations={educations} />
        </Section>
        <Section id="contact">
          <SectionTitle>Contact</SectionTitle>
          <Contact
            contactImage={contactImage.childImageSharp.fluid}
            onSubmitForm={handleFormcarrySubmit}
          />
        </Section>
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
