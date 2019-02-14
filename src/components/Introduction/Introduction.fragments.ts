import { graphql } from "gatsby";

export const INTRODUCTION_FRAGMENT_QUERY = graphql`
  fragment IntroductionFragment on IntroductionJson {
    id
    description
  }
`;
