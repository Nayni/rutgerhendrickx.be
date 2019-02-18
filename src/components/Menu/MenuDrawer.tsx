import React from "react";

import Drawer from "@material-ui/core/Drawer";
import { styled } from "@material-ui/styles";

export interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

type AllProps = MenuDrawerProps;

const ListContainer = styled("div")({
  width: "250px"
});

const MenuDrawer: React.FC<AllProps> = ({ children, isOpen, onClose }) => {
  return (
    <Drawer open={isOpen} onClose={onClose}>
      <ListContainer>{children}</ListContainer>
    </Drawer>
  );
};

export default MenuDrawer;
