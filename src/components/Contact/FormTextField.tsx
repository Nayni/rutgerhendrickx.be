import React from "react";

import { FormikErrors, FormikTouched } from "formik";

import TextField, { TextFieldProps } from "@material-ui/core/TextField";

import { Omit } from "../../utils";

interface FormProps {
  values: {
    [key: string]: any;
  };
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
}

type RemainingTextFieldProps = Omit<
  TextFieldProps,
  "name" | "variant" | "value" | "helperText" | "error" | "margin"
> &
  Required<Pick<TextFieldProps, "name" | "onChange" | "onBlur">>;

type FormTextFieldProps = FormProps & RemainingTextFieldProps;

const FormTextField: React.FC<FormTextFieldProps> = ({
  name,
  label,
  placeholder,
  values,
  errors,
  touched,
  onChange,
  onBlur,
  ...rest
}) => {
  return (
    <TextField
      name={name}
      label={label}
      placeholder={placeholder}
      variant="outlined"
      value={values[name]}
      helperText={touched[name] && errors[name]}
      error={Boolean(touched[name] && errors[name])}
      onChange={onChange}
      onBlur={onBlur}
      margin="normal"
      {...rest}
    />
  );
};

export default FormTextField;
