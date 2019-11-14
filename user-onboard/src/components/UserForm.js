import React from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const UserForm = ({ users, setUsers }) => {
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

        <ErrorMessage name="agreeTerms" />
        <br />
        <label>
          I accept the terms and service!
          <Field type="checkbox" name="agreeTerms" />
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
      agreeTerms: false
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
    agreeTerms: Yup.boolean()
      .test(
        "agreeTerms",
        "You have to agree with our Terms and Conditions!",
        value => value === true
      )
      .required("You have to agree with our Terms and Conditions!")
  }),

  handleSubmit(values, bag) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        const postedUser = res.data;
        axios
          .get("https://reqres.in/api/users/")
          .then(res => bag.props.setUsers([...res.data.data, postedUser]))
          .catch(err => err.message);
        bag.resetForm();
      })
      .catch(err => bag.setErrors(err.message));
  }
})(UserForm);

export default UserFormikForm;
