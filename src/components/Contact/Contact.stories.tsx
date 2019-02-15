import React from "react";

import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

import Contact from "./Contact";

const onSubmit = action("onSubmit");

storiesOf("Contact", module).add("default", () => (
  <Contact
    contactImage={{
      src: "",
      srcSet: "",
      aspectRatio: 0,
      sizes: ""
    }}
    onSubmitForm={onSubmit}
  />
));
