import React from "react";

import { object, string } from "yup";

import { Formik } from "formik";
import { InjectedNotistackProps, withSnackbar } from "notistack";

import FormButton from "./FormButton";
import FormTextField from "./FormTextField";

export interface ContactFormProps {
  onSubmitForm: (values: ContactFormValues) => void | Promise<void>;
}

export type ContactFormValues = typeof initialValues;

type AllProps = ContactFormProps & InjectedNotistackProps;

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

const validationScheme = object().shape<ContactFormValues>({
  name: string().required("Please fill in your name"),
  email: string()
    .email("That isn't a valid e-mail")
    .required("Please fill in your e-mail"),
  subject: string().required("Please specify a subject"),
  message: string().required("Please write a message")
});

const ContactForm: React.FC<AllProps> = ({ onSubmitForm, enqueueSnackbar }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationScheme}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        Promise.resolve()
          .then(() => onSubmitForm(values))
          .then(() => setSubmitting(false))
          .then(() => {
            resetForm();
            enqueueSnackbar("Thank you for getting in touch!", {
              variant: "success"
            });
          });
      }}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleReset,
        handleChange,
        handleBlur,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <FormTextField
            name="name"
            label="Name"
            placeholder="Jane"
            values={values}
            errors={errors}
            touched={touched}
            onChange={handleChange}
            onBlur={handleBlur}
            inputProps={{
              ["aria-label"]: "Name"
            }}
            fullWidth
          />
          <FormTextField
            name="email"
            label="Email"
            placeholder="Doe"
            values={values}
            errors={errors}
            touched={touched}
            onChange={handleChange}
            onBlur={handleBlur}
            inputProps={{
              ["aria-label"]: "Email"
            }}
            fullWidth
          />
          <FormTextField
            name="subject"
            label="Subject"
            placeholder="Do you like cookies?"
            values={values}
            errors={errors}
            touched={touched}
            onChange={handleChange}
            onBlur={handleBlur}
            inputProps={{
              ["aria-label"]: "Subject"
            }}
            fullWidth
          />
          <FormTextField
            name="message"
            label="Message"
            placeholder="I love cookies"
            values={values}
            errors={errors}
            touched={touched}
            onChange={handleChange}
            onBlur={handleBlur}
            inputProps={{
              ["aria-label"]: "Message"
            }}
            rows="4"
            fullWidth
            multiline
          />
          <FormButton type="submit" isSubmitting={isSubmitting} fullWidth>
            Send
          </FormButton>
        </form>
      )}
    </Formik>
  );
};

export default withSnackbar(ContactForm);
