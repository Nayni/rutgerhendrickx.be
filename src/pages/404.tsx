import React from "react";

import Page from "../components/Page";
import withRoot from "../withRoot";

const NotFoundPage: React.FC = () => (
  <Page title="404: Not found">
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Page>
);

export default withRoot(NotFoundPage);
