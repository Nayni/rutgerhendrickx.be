import React from "react";

import Grid from "@material-ui/core/Grid";
import { styled } from "@material-ui/styles";
import { FluidObject } from "gatsby-image";

import Hero, { HeroSubText, HeroText } from "../Hero";
import ProfilePicture from "../ProfilePicture";
import HeaderGridItem from "./HeaderGridItem";
import HeaderSocials from "./HeaderSocials";

interface HeaderProps {
  heroImage: FluidObject;
  heroText: string;
  heroSubText: string;
  profileImage: FluidObject;
}

const HeaderSocialGridItem = styled(HeaderGridItem)({
  paddingTop: "20px"
});

const Header: React.FC<HeaderProps> = ({
  heroImage,
  heroText,
  heroSubText,
  profileImage
}) => {
  return (
    <header>
      <Hero imgFluid={heroImage}>
        <Grid container>
          <HeaderGridItem>
            <ProfilePicture fluid={profileImage} />
          </HeaderGridItem>
          <HeaderGridItem>
            <HeroText>{heroText}</HeroText>
          </HeaderGridItem>
          <HeaderGridItem>
            <HeroSubText>{heroSubText}</HeroSubText>
          </HeaderGridItem>
          <HeaderSocialGridItem>
            <HeaderSocials />
          </HeaderSocialGridItem>
        </Grid>
      </Hero>
    </header>
  );
};

export default Header;
