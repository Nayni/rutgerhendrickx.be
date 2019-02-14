import { graphql } from "gatsby";

export const CERTIFICATION_FRAGMENT_QUERY = graphql`
  fragment CertificationFragment on CertificationsJson {
    id
    name
    authority
    date(formatString: "MMMM YYYY")
  }
`;
