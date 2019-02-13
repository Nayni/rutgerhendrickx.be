import React from "react";

import { object, string } from "yup";

import { Formik } from "formik";

import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

const validationScheme = object().shape<typeof initialValues>({
  name: string().required("Name is required"),
  email: string()
    .email("E-mail is not valid")
    .required("E-mail is required"),
  subject: string().required("Subject is required"),
  message: string().required("Message is required")
});

const ContactForm: React.FC = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationScheme}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 3000);
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
          <TextField
            name="name"
            label="Name"
            placeholder="Jane"
            variant="outlined"
            value={values.name}
            helperText={touched.name && errors.name}
            error={Boolean(touched.name && errors.name)}
            onChange={handleChange}
            onBlur={handleBlur}
            margin="normal"
            fullWidth
          />
          <TextField
            name="email"
            label="Email"
            placeholder="Doe"
            variant="outlined"
            value={values.email}
            helperText={touched.email && errors.email}
            error={Boolean(touched.email && errors.email)}
            onChange={handleChange}
            onBlur={handleBlur}
            margin="normal"
            fullWidth
          />
          <TextField
            name="subject"
            label="Subject"
            placeholder="Do you like cookies?"
            variant="outlined"
            value={values.subject}
            helperText={touched.subject && errors.subject}
            error={Boolean(touched.subject && errors.subject)}
            onChange={handleChange}
            onBlur={handleBlur}
            margin="normal"
            fullWidth
          />
          <TextField
            name="message"
            label="Message"
            placeholder="I love cookies"
            variant="outlined"
            value={values.message}
            helperText={touched.message && errors.message}
            error={Boolean(touched.message && errors.message)}
            onChange={handleChange}
            onBlur={handleBlur}
            margin="normal"
            rows="4"
            multiline
            fullWidth
          />
          <Button
            color="secondary"
            variant="contained"
            type="submit"
            disabled={isSubmitting}
            fullWidth
          >
            {isSubmitting ? <CircularProgress size={24} /> : "Send"}
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
