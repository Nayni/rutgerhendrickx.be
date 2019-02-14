import React from "react";

import { storiesOf } from "@storybook/react";

import Experience from "./Experience";

storiesOf("Experience", module).add("default", () => (
  <Experience
    experiences={[
      {
        id: "1",
        company: "The Chocolate Factory",
        role: "Taster",
        description: ["Hmm I love chocolate"],
        start: "Jan 2018",
        end: "Jan 3000",
        tags: ["Chocolate", "Love it", "Hmmmm"]
      },
      {
        id: "2",
        company: "The Candy Shop",
        role: "Salesman",
        description: ["<3 Candy"],
        start: "Jan 2018",
        end: "Jan 3000",
        tags: ["Sweet", "Nomnomnom"]
      }
    ]}
  />
));
