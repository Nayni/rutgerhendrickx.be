import React from "react";

import SEO, { SEOProps } from "../SEO";

type PageOwnProps = Readonly<{
  children: React.ReactNode;
}>;

type PageProps = PageOwnProps & SEOProps;

const Page: React.FC<PageProps> = ({ children, ...seoProps }) => {
  return (
    <div>
      <SEO {...seoProps} />
      {children}
    </div>
  );
};

export default Page;
