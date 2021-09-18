// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import {
//     Button,
//     TextField,
//     Grid,
//     Container,
//     Avatar,
//     Typography,
    
//   } from '@material-ui/core';

// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

// const stylesFunc = makeStyles((theme) => ({
//     wrapper: {
//       marginTop: '3rem',
//       height: 'calc(100vh - 19.0625rem)',
//       textAlign: 'center',
//       marginBottom: '12rem',
//       width:'30rem'
//     },
//     avatar: {
//       margin: '1rem auto',
//       backgroundColor: theme.palette.secondary.main,
//     },
//     signUp: {
//       margin: '1rem',
//     },
//     login: {
//       textDecoration: 'none',
//       fontWeight: '600',
//       paddingLeft: '0.5rem',
//     },
//     googleImg: {
//       width: 75,
//       marginLeft: 10,
//     },
//   }));

//  function Register() {
//     const signupStyles = stylesFunc();

//   return (
//     <Container className={signupStyles.wrapper}>
//       <Avatar className={signupStyles.avatar}>
//         <LockOutlinedIcon />
//       </Avatar>
//     <Typography  className={signupStyles.signUp} variant="h4">
//         Sign Up
//     </Typography>

//     <form>
//             <Grid container spacing={3}>
//               <Grid item xs={12}>
//                 <TextField
//                   name="username"
//                   label="User Name"
//                   variant="outlined"
//                   fullWidth
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   name="email"
//                   label="Email"
//                   variant="outlined"
//                   fullWidth
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   name="password"
//                   label="Password"
//                   variant="outlined"
//                   type="password"
//                   fullWidth
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   name="password2"
//                   label="Password Again"
//                   variant="outlined"
//                   type="password"
//                   fullWidth
                 
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   color="primary"
//                   fullWidth
//                 >
//                   Register
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>


//     </Container>
//   );
// }

// export default Register;