import React from "react";

import { storiesOf } from "@storybook/react";

import Header from "./Header";

storiesOf("Header", module).add("default", () => (
  <Header
    heroImage={{
      src: "",
      srcSet: "",
      aspectRatio: 0,
      sizes: ""
    }}
    profileImage={{
      src: "",
      srcSet: "",
      aspectRatio: 0,
      sizes: ""
    }}
    heroText="Hero Text"
    heroSubText="Hero Sub Text"
  />
));
