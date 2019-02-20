import React from "react";

import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

import MailIcon from "../icons/MailIcon";
import Menu from "./Menu";
import MenuDrawer from "./MenuDrawer";
import MenuItem from "./MenuItem";

const onClose = action("onClose");

storiesOf("Menu", module)
  .add("default", () => (
    <Menu>
      <MenuItem label="Item 1" icon={MailIcon} anchor="item1" />
      <MenuItem label="Item 2" icon={MailIcon} anchor="item2" />
      <MenuItem label="Item 3" icon={MailIcon} anchor="item3" />
      <MenuItem label="Item 4" icon={MailIcon} anchor="item4" />
    </Menu>
  ))
  .add("inside menu drawer (open)", () => (
    <MenuDrawer isOpen={true} onClose={onClose}>
      <Menu>
        <MenuItem label="Item 1" icon={MailIcon} anchor="item1" />
        <MenuItem label="Item 2" icon={MailIcon} anchor="item2" />
        <MenuItem label="Item 3" icon={MailIcon} anchor="item3" />
        <MenuItem label="Item 4" icon={MailIcon} anchor="item4" />
      </Menu>
    </MenuDrawer>
  ));
