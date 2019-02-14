import { graphql } from "gatsby";

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
