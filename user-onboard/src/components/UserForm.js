import React from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";

const UserForm = () => {
  return <div></div>;
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
