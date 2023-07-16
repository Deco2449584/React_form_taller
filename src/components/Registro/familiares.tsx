import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

// Creamos una interfaz para los datos del formulario
interface FamilyDataFormValues {
  parentName: string;
  siblingName: string;
  maritalStatus: string;
}

const FamilyData: React.FC = () => {
  const initialValues: FamilyDataFormValues = {
    parentName: "",
    siblingName: "",
    maritalStatus: "",
  };

  const handleSubmit = (values: FamilyDataFormValues) => {
    console.log(values);
  };

  const validateForm = (values: FamilyDataFormValues) => {
    const errors: Partial<FamilyDataFormValues> = {};

    if (!values.parentName) {
      errors.parentName = "Required";
    }

    if (!values.siblingName) {
      errors.siblingName = "Required";
    }

    if (!values.maritalStatus) {
      errors.maritalStatus = "Required";
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
              htmlFor="parentName"
            >
              Parent's Name
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="parentName"
              type="text"
              name="parentName"
              placeholder="Enter your parent's name"
            />
            <ErrorMessage
              name="parentName"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="siblingName"
            >
              Sibling's Name
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="siblingName"
              type="text"
              name="siblingName"
              placeholder="Enter your sibling's name"
            />
            <ErrorMessage
              name="siblingName"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="maritalStatus"
            >
              Marital Status
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="maritalStatus"
              component="select"
              name="maritalStatus"
            >
              <option value="">Select marital status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </Field>
            <ErrorMessage
              name="maritalStatus"
              component="div"
              className="text-red-500 text-xs mt-1"
            />
          </div>
          <div className="flex justify-between">
            <Link
              to="/academic"
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

export default FamilyData;
