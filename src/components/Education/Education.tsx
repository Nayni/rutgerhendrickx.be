import React from "react";

import { graphql } from "gatsby";

import Typography from "@material-ui/core/Typography";
import { School } from "@material-ui/icons";
import { styled } from "@material-ui/styles";

import Section, { SectionTitle } from "../Section";
import Timeline, {
  TimelineContent,
  TimelineItem,
  TimelineSubTitle,
  TimelineTitle
} from "../Timeline";

interface EducationProps {
  educations: EducationFragmentProps[];
}

const DegreeText = styled(Typography)({
  lineHeight: "inherit",
  marginTop: "3px"
});

const Education: React.FC<EducationProps> = ({ educations }) => {
  return (
    <Section>
      <SectionTitle>Education</SectionTitle>
      <Timeline width={8}>
        {educations.map((education, index) => (
          <TimelineItem
            key={`education-${index}`}
            period={
              <Typography variant="overline">
                {education.start} - {education.end}
              </Typography>
            }
            icon={School}
          >
            <TimelineContent>
              <TimelineTitle>{education.studySubject}</TimelineTitle>
              <TimelineSubTitle>{education.institution}</TimelineSubTitle>
              <DegreeText variant="overline">{education.degree}</DegreeText>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
};

export interface EducationFragmentProps {
  id: string;
  institution: string;
  degree: string;
  studySubject: string;
  start: string;
  end: string;
}

export const EDUCATION_FRAGMENT_QUERY = graphql`
  fragment EducationFragment on EducationJson {
    id
    institution
    degree
    studySubject
    start: startDate(formatString: "YYYY")
    end: endDate(formatString: "YYYY")
  }
`;

export default Education;
