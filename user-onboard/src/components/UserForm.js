import React from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";

const UserForm = () => {
  return (
    <div>
      <Form>
        <label>
          Name:
          <Field type="text" name="name" />
        </label>
        <br />
        <br />
        <label>
          Email:
          <Field type="email" name="email" />
        </label>
        <br />
        <br />
        <label>
          Password:
          <Field type="password" name="password" />
        </label>
        <br />
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
  }
})(UserForm);

export default UserFormikForm;
