import React from "react";

import { graphql } from "gatsby";

import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { styled } from "@material-ui/styles";

import Section, { SectionTitle } from "../Section";
import Timeline, {
  TimelineItem,
  TimelineSubTitle,
  TimelineTitle
} from "../Timeline";
import ExperienceChip from "./ExperienceChip";
import ExperienceChips from "./ExperienceChips";

interface ExperienceProps {
  experiences: ExperienceFragmentProps[];
}

const TimelineContent = styled("div")({
  padding: "16px"
});

const TimelineText = styled(Typography)({
  marginTop: "10px"
});

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <Section>
      <SectionTitle>Experience</SectionTitle>
      <Timeline width={8}>
        {experiences.map((experience, index) => (
          <TimelineItem
            key={`experience-${index}`}
            period={
              <Typography variant="overline">
                {experience.start} - {experience.end || "Present"}
              </Typography>
            }
          >
            <TimelineContent>
              <TimelineTitle>{experience.role}</TimelineTitle>
              <TimelineSubTitle>{experience.company}</TimelineSubTitle>
              {experience.description.map((paragraph, i) => (
                <TimelineText key={`experience-${index}-paragraph-${i}`}>
                  {paragraph}
                </TimelineText>
              ))}
            </TimelineContent>
            <Divider />
            <TimelineContent>
              <ExperienceChips>
                {experience.tags.map((tag, ii) => (
                  <ExperienceChip
                    key={`experience-${index}-tag-${ii}`}
                    label={tag}
                  />
                ))}
              </ExperienceChips>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
};

export interface ExperienceFragmentProps {
  id: string;
  company: string;
  role: string;
  start: string;
  end: string;
  description: string[];
  tags: string[];
}

export const EXPERIENCE_FRAGMENT_QUERY = graphql`
  fragment ExperienceFragment on ExperiencesJson {
    id
    company
    role
    start: startDate(formatString: "MMM YYYY")
    end: endDate(formatString: "MMM YYYY")
    description
    tags
  }
`;

export default Experience;
