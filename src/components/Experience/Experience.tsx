import React from "react";

import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { styled } from "@material-ui/styles";

import Section, { SectionTitle } from "../Section";
import Timeline, {
  TimelineContent,
  TimelineItem,
  TimelineSubTitle,
  TimelineTitle
} from "../Timeline";
import ExperienceChip from "./ExperienceChip";
import ExperienceChips from "./ExperienceChips";

export interface ExperienceFragmentProps {
  id: string;
  company: string;
  role: string;
  start: string;
  end: string;
  description: string[];
  tags: string[];
}

interface ExperienceProps {
  experiences: ExperienceFragmentProps[];
}

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

export default Experience;
