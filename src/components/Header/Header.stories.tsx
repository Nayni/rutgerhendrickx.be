import React from "react";

import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

import Header from "./Header";

const onMenuOpen = action("OnMenuOpen");

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
    mailto="mailto:rutgerhendrickx@gmail.com"
    linkedin="https://www.linkedin.com/in/rutger-hendrickx-845a23112/"
    github="https://github.com/nayni"
    onMenuOpen={onMenuOpen}
  />
));
