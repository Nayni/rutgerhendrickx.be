// tslint:disable:no-implicit-dependencies
import React from "react";

import { storiesOf } from "@storybook/react";

import Typography from "@material-ui/core/Typography";
import { Add } from "@material-ui/icons";

import TimelineSubTitle from "./TimeilneSubTitle";
import Timeline from "./Timeline";
import TimelineContent from "./TimelineContent";
import TimelineItem from "./TimelineItem";
import TimelineTitle from "./TimelineTitle";

storiesOf("Timeline", module)
  .add("default", () => (
    <Timeline width={8}>
      {[1, 2, 3, 4, 5].map(v => (
        <TimelineItem
          key={`timeline-${v}`}
          period={<Typography>Start - End</Typography>}
        >
          <TimelineContent>
            <TimelineTitle>Title</TimelineTitle>
            <TimelineSubTitle>Sub-title</TimelineSubTitle>
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
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  ))
  .add("with custom icon", () => (
    <Timeline width={8}>
      {[1, 2, 3, 4, 5].map(v => (
        <TimelineItem
          key={`timeline-${v}`}
          icon={Add}
          period={<Typography>Start - End</Typography>}
        >
          <TimelineContent>
            <TimelineTitle>Title</TimelineTitle>
            <TimelineSubTitle>Sub-title</TimelineSubTitle>
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
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  ));
