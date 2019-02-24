import React from "react";

import { IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { styled } from "@material-ui/styles";

export interface HeaderMenuButtonProps {
  onMenuOpen: () => void;
}

const Container = styled("div")({
  position: "absolute",
  top: 15,
  left: 15
});

const HeaderMenuButton: React.FC<HeaderMenuButtonProps> = ({ onMenuOpen }) => {
  return (
    <Container>
      <IconButton color="secondary" onClick={onMenuOpen} aria-label="Menu">
        <Menu />
      </IconButton>
    </Container>
  );
};

export default HeaderMenuButton;
