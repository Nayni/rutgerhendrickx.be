import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

import { ScrollableAnchorOptions, useScrollableAnchor } from "../../utils";

export interface MenuItemProps extends ScrollableAnchorOptions {
  icon: React.ComponentType<SvgIconProps>;
  label: string;
  anchor: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  label,
  icon: Icon,
  ...scrollableAnchorProps
}) => {
  const { href, onClick } = useScrollableAnchor(scrollableAnchorProps);

  return (
    <ListItem
      key={`menu-${label}`}
      button
      component={"a"}
      href={href}
      onClick={onClick}
    >
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItem>
  );
};

export default MenuItem;
