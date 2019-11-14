import React from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';

const UserForm = () => {
  return (
    <div>
      <Form>
        <ErrorMessage name="name" />
        <br />
        <label>
          Name:
          <Field type="text" name="name" />
        </label>
        <br />
        <br />

        <ErrorMessage name="email" />
        <br />
        <label>
          Email:
          <Field type="email" name="email" />
        </label>
        <br />
        <br />

        <ErrorMessage name="password" />
        <br />
        <label>
          Password:
          <Field type="password" name="password" />
        </label>
        <br />
        <br />

        <ErrorMessage name="terms" />
        <br />
        <label>
          I accept the terms and service!
          <Field type="checkbox" name="terms" />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

const UserFormikForm = withFormik({
  
  mapPropsToValues() {
    return {
      name: "",
      email: "",
      password: "",
      terms: false
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, "Name should be at least three characters")
      .required("Please enter name"),
    email: Yup.string()
      .email("Please enter a valid Email!")
      .required("Please enter email"),
    password: Yup.string()
      .min(8, "Password should be at least 8 characters!")
      .required("Please enter password!"),
    terms: Yup.boolean().required("This box must be checked!")
  }),

  handleSubmit(values, bag) {
    console.log(values);
    console.log(bag);
    
  }

})(UserForm);

export default UserFormikForm;
