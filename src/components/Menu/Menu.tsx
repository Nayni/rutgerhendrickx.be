import React from "react";

import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

import MenuHeading from "./MenuHeading";

export interface MenuProps {
  children?: React.ReactNode;
}

const Menu: React.FC<MenuProps> = ({ children }) => {
  return (
    <List>
      <MenuHeading />
      <Divider />
      <nav>{children}</nav>
    </List>
  );
};

export default Menu;
