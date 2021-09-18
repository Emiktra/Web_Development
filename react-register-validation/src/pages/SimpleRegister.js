// import React from 'react'
// import '../App.css';
// import { FormikContext, useFormik, yupToFormErrors } from 'formik';
// import * as Yup from 'yup';

// const initialValues={
//     name:"",
//     email:"",
//     userName:"",
// }
// onSubmit:values=>{
//     console.log("Values", values)
// },

// function SimpleRegister() {
//     const formik =useFormik({
//         initialValues,
//         onSubmit,
//         // validate:values=>{
//         //     let errors={};
//         //     if(!values.name){
//         //         errors.name="Please fill this area"
//         //     }
//         //     if(!values.email){
//         //         errors.email="Please fill this area"
//         //     }
//         //     else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         //         errors.email = 'Invalid email address';}
//         //     if(!values.userName){
//         //         errors.userName="Please fill this area"
//         //     }
//         //     return errors
//         // }
//         validationShema:Yup.object({
//             name: Yup.string()
//             .max(15, "Cannot be longer than 15 characters")
//             .required("Name is required"),
//             userName: Yup.string()
//             .max(15, "Cannot be longer than 15 characters")
//             .required("User Name is required"),
//             email: Yup.string()
//             .email("Invalid email address")
//             .required("Email is required"),
//         })
//     });

//     return (
//         <div className="container">
//             <h1>Simple Form</h1>
            
//             <form className="formStyle" onSubmit={formik.handleSubmit}>
//             <label  htmlFor="name">Name</label>
//             <input type="text" id="name" name="name" 
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur} value={formik.values.name} />
//             {formik.errors.name && formik.touched.name ?
//             <div className="errorStyle">{formik.errors.name}</div>:null}
            
            
//             <label  htmlFor="email">Email</label>
//             <input type="text" id="email" name="email" 
//             onChange={formik.handleChange} 
//             onBlur={formik.handleBlur} value={formik.values.email} />
//             {formik.errors.email && formik.touched.name ?
//             <div className="errorStyle">{formik.errors.email}</div>:null}

//             <label htmlFor="userName">User name</label>
//             <input type="text" id="userName" name="userName" 
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur} value={formik.values.userName} />
//             {formik.errors.userName && formik.touched.name  ?
//             <div className="errorStyle">{formik.errors.userName}</div>:null}

//             <button type="submit">Submit</button>
//             </form>
//         </div>
//     )
// }

// export default SimpleRegister

