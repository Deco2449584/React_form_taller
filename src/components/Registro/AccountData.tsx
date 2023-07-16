import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { AccountDataFormValues } from "../../models/DataFormValues";

const AccountData: React.FC = () => {
  const initialValues: AccountDataFormValues = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values: AccountDataFormValues) => {
    console.log(values);
  };

  const validateForm = (values: AccountDataFormValues) => {
    const errors: Partial<AccountDataFormValues> = {};

    if (!values.username) {
      errors.username = "Required";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords must match";
    }

    return errors;
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="username"
              placeholder="Enter your username"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div className="flex justify-between">
            <Link
              to="/employment"
              className="text-blue-500 hover:text-blue-700 text-sm"
            >
              Previous Step
            </Link>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Next Step
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AccountData;
