import React from "react";

import { storiesOf } from "@storybook/react";

import Hero from "./Hero";
import HeroSubText from "./HeroSubText";
import HeroText from "./HeroText";

storiesOf("Hero", module).add("default", () => (
  <Hero
    imgFluid={{
      src: "",
      srcSet: "",
      aspectRatio: 0,
      sizes: ""
    }}
  >
    <HeroText>Hero Text</HeroText>
    <HeroSubText>Hero Sub Text</HeroSubText>
  </Hero>
));
