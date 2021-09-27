// import React from 'react'
// import '../App.css';
// import { useFormik,ErrorMessage, Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';

// const initialValues={
//     name:"",
//     email:"",
//     userName:"",
// }
// const onSubmit=(values)=>{
//     console.log("Values", values)
// }
// const validationShema=Yup.object({
//     name: Yup.string()
//     .max(15, "Cannot be longer than 15 characters")
//     .required("Name is required"),
//     userName: Yup.string()
//     .max(15, "Cannot be longer than 15 characters")
//     .required("User Name is required"),
//     email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
// })

// function SimpleRegisterWithComponents() {
//     const formik =useFormik({
//         initialValues,
//         onSubmit,
//         validationShema,
//     });

//     return (
//         <div>
//         <Formik className="container" initialValues={initialValues}
//         onSubmit={onSubmit}
//         validationShema={validationShema}>
//             <h1>Simple Form</h1>
            
//             <Form className="formStyle" onSubmit={formik.handleSubmit}>
//             <label  htmlFor="name">Name</label>
//             <Field type="text" id="name" name="name"/>
//             <ErrorMessage name="name" />
            
            
//             <label  htmlFor="email">Email</label>
//             <Field type="text" id="email" name="email"/>
//             <ErrorMessage name="email" />

//             <label htmlFor="userName">User name</label>
//             <Field type="text" id="userName" name="userName"/>
//             <ErrorMessage name="email" />

//             <button type="submit">Submit</button>
//             </Form>
//         </Formik>
//         </div>
//     )
// }

// export default SimpleRegisterWithComponents









import React from "react";
import "../App.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "",
  email: "",
  userName: "",
};
const onSubmit = (values) => {
  console.log("Values:", values);
};
const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required.Enter name"),
  userName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required.Enter user name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Required.Enter email address"),
});
function SimpleRegisterWithComponent() {
  return (
    <div>
      <h1>Simple Form</h1>
    <Formik
      className="container"
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="formStyle">
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" />
        <label htmlFor="email">Email</label>
        <Field type="text" id="email" name="email" />
        <ErrorMessage name="email"/>
        <label htmlFor="userName">User name</label>
        <Field type="text" id="userName" name="userName" />
        <ErrorMessage name="userName"/>
        <button>Submit</button>
      </Form>
    </Formik>
    </div>
  );
}
export default SimpleRegisterWithComponent;