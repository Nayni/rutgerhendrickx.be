import React from "react";

import Grid from "@material-ui/core/Grid";
import { styled } from "@material-ui/styles";

interface HeaderGridItemProps {
  className?: string;
  children?: React.ReactNode;
}

const StyledGrid = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  paddingTop: "8px"
});

const HeaderGridItem: React.FC<HeaderGridItemProps> = ({
  className,
  children
}) => {
  return (
    <StyledGrid className={className} item xs={12}>
      {children}
    </StyledGrid>
  );
};

export default HeaderGridItem;
