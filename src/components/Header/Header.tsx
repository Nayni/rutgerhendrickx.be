import React from "react";

import { FluidObject } from "gatsby-image";

import Grid from "@material-ui/core/Grid";
import { styled } from "@material-ui/styles";

import Hero, { HeroSubText, HeroText } from "../Hero";
import ProfilePicture from "../ProfilePicture";
import StickyHeader, { useStickyHeaderDetection } from "../StickyHeader";
import HeaderGridItem from "./HeaderGridItem";
import HeaderMenuButton from "./HeaderMenuButton";
import HeaderSocials, { HeaderSocialsProps } from "./HeaderSocials";

interface HeaderProps {
  heroImage: FluidObject;
  heroText: string;
  heroSubText: string;
  profileImage: FluidObject;
  onMenuClick: () => void;
}

type AllProps = HeaderProps & HeaderSocialsProps;

const HeaderSocialGridItem = styled(HeaderGridItem)({
  paddingTop: "20px"
});

const Header: React.FC<AllProps> = ({
  heroImage,
  heroText,
  heroSubText,
  profileImage,
  onMenuClick,
  ...socialProps
}) => {
  const showStickyHeader = useStickyHeaderDetection({ yOffset: 150 });

  return (
    <header>
      {showStickyHeader && <StickyHeader onMenuClick={onMenuClick} />}
      <Hero imgFluid={heroImage}>
        <HeaderMenuButton onMenuOpen={onMenuClick} />
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
            <HeaderSocials {...socialProps} />
          </HeaderSocialGridItem>
        </Grid>
      </Hero>
    </header>
  );
};

export default Header;
