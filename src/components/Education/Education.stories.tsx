import React from "react";

import { storiesOf } from "@storybook/react";

import Education from "./Education";

storiesOf("Education", module).add("default", () => (
  <Education
    educations={[
      {
        id: "1",
        degree: "Bachelor",
        institution: "The Chocolate Factory",
        studySubject: "Chocolate Expert",
        start: "2018",
        end: "3000"
      },
      {
        id: "2",
        degree: "Bachelor",
        institution: "The Candy Shop",
        studySubject: "Sweets",
        start: "2018",
        end: "3000"
      }
    ]}
  />
));
