import React from "react";

export interface MenuDrawerHookProps {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

const useMenuDrawer = (): MenuDrawerHookProps => {
  const [isOpen, setIsOpen] = React.useState(true);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return {
    isOpen,
    openMenu,
    closeMenu
  };
};

export default useMenuDrawer;
