import React from "react";

import SEO, { SEOProps } from "../SEO";
import { StyleProps } from "../styles";

type PageOwnProps = Readonly<{
  children: React.ReactNode;
}>;

type PageProps = PageOwnProps & SEOProps & StyleProps;

const Page: React.FC<PageProps> = ({ className, children, ...seoProps }) => {
  return (
    <div className={className}>
      <SEO {...seoProps} />
      {children}
    </div>
  );
};

export default Page;
