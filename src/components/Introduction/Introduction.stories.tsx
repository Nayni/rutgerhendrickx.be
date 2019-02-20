import React from "react";

import { storiesOf } from "@storybook/react";

import Introduction from "./Introduction";

storiesOf("Introduction", module).add("default", () => (
  <Introduction
    contactAnchor="contact"
    description={[
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed venenatis purus. Nulla consectetur maximus ligula a pulvinar. Morbi viverra tortor eu nisi blandit sagittis. ",
      "Integer ac augue ante. Cras quis imperdiet odio. Donec vulputate magna a velit eleifend ultrices. Nullam in placerat mi. Etiam rhoncus feugiat feugiat. Mauris quam lectus, tempus eget cursus sed, malesuada tempor lectus."
    ]}
  />
));
