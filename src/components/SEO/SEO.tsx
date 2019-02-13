import React from "react";

import { graphql, StaticQuery } from "gatsby";
import Helmet from "react-helmet";

export type SEOProps = Readonly<{
  title: string;
  description?: string;
  lang?: string;
  meta?: Array<{
    name: string;
    content: string;
  }>;
  keywords?: string[];
}>;

export const SEO_DATA_QUERY = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  lang = "en",
  meta = [],
  keywords = []
}) => {
  return (
    <StaticQuery
      query={SEO_DATA_QUERY}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription
              },
              {
                property: `og:title`,
                content: title
              },
              {
                property: `og:description`,
                content: metaDescription
              },
              {
                property: `og:type`,
                content: `website`
              },
              {
                name: `twitter:card`,
                content: `summary`
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author
              },
              {
                name: `twitter:title`,
                content: title
              },
              {
                name: `twitter:description`,
                content: metaDescription
              }
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `)
                    }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
};

export default SEO;
