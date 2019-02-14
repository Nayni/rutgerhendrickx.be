import React from "react";

import { storiesOf } from "@storybook/react";

import Certifications from "./Certifications";

storiesOf("Certifications", module).add("default", () => (
  <Certifications
    certifications={[
      {
        id: "1",
        name: "Professional Chocolate Taster",
        authority: "The Chocolate Factory",
        date: "Jan 2018"
      },
      {
        id: "2",
        name: "Expert Pizza Thrower",
        authority: "The Pizza Place",
        date: "Jan 2018"
      }
    ]}
  />
));
