import React from "react";

import { storiesOf } from "@storybook/react";

import Typography from "@material-ui/core/Typography";

import Section from "./Section";
import SectionTitle from "./SectionTitle";

storiesOf("Section", module)
  .add("default", () => (
    <Section>
      <SectionTitle>Section Title</SectionTitle>
      <div>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed
          venenatis purus. Nulla consectetur maximus ligula a pulvinar. Morbi
          viverra tortor eu nisi blandit sagittis. Integer ac augue ante. Cras
          quis imperdiet odio. Donec vulputate magna a velit eleifend ultrices.
          Nullam in placerat mi. Etiam rhoncus feugiat feugiat. Mauris quam
          lectus, tempus eget cursus sed, malesuada tempor lectus. Quisque nunc
          odio, sollicitudin vitae elementum vitae, finibus in enim. Quisque
          feugiat sem turpis, rutrum feugiat justo porta sed.
        </Typography>
      </div>
    </Section>
  ))
  .add("multiple sections", () => (
    <React.Fragment>
      {[1, 2, 3, 4].map(v => (
        <Section key={`section-${v}`}>
          <SectionTitle>Section Title</SectionTitle>
          <div>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              sed venenatis purus. Nulla consectetur maximus ligula a pulvinar.
              Morbi viverra tortor eu nisi blandit sagittis. Integer ac augue
              ante. Cras quis imperdiet odio. Donec vulputate magna a velit
              eleifend ultrices. Nullam in placerat mi. Etiam rhoncus feugiat
              feugiat. Mauris quam lectus, tempus eget cursus sed, malesuada
              tempor lectus. Quisque nunc odio, sollicitudin vitae elementum
              vitae, finibus in enim. Quisque feugiat sem turpis, rutrum feugiat
              justo porta sed.
            </Typography>
          </div>
        </Section>
      ))}
    </React.Fragment>
  ));
