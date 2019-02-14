import React from "react";

import { storiesOf } from "@storybook/react";

import Contact from "./Contact";

storiesOf("Contact", module).add("default", () => (
  <Contact
    contactImage={{
      src: "",
      srcSet: "",
      aspectRatio: 0,
      sizes: ""
    }}
  />
));
