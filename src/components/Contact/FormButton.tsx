import React from "react";

import Button, { ButtonProps } from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import { Omit } from "../../utils";

interface FormProps {
  isSubmitting: boolean;
}

type RemainingButtonProps = Omit<ButtonProps, "color" | "variant" | "disabled">;

type FormButtonProps = RemainingButtonProps & FormProps;

const FormButton: React.FC<FormButtonProps> = ({
  children,
  isSubmitting,
  ...rest
}) => {
  return (
    <Button
      color="secondary"
      variant="contained"
      disabled={isSubmitting}
      {...rest}
    >
      {isSubmitting ? <CircularProgress size={24} /> : children}
    </Button>
  );
};

export default FormButton;
