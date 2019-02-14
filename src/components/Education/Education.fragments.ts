import { graphql } from "gatsby";

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
