import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

export interface MenuItemProps {
  icon: React.ComponentType<SvgIconProps>;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, icon: Icon }) => {
  return (
    <ListItem key={`menu-${label}`} button>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItem>
  );
};

export default MenuItem;
