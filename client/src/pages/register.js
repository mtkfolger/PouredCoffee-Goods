import React from "react";
import "../App.css";
import { Button, Stack } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

 function Register() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>

      <h1 className="home-para">Register</h1>
      <hr className="line"></hr>
        <TextField
          required
          id="outlined-required"
          label="First Name"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="Last Name"
          defaultValue=""
        />
        <TextField
         required
          id="outlined-password-input"
          label="E-mail"
          type="E-mail"
        />
         <TextField
          required
          id="outlined-password-input"
          label="Password"
        />
        <TextField
        optional
          id="outlined-number"
          label="Phone Number"
        />

        <h3 className="h3">Items marked with * are required and must be filled out before completing your registration</h3>
      
        <Button className="button" variant="contained">Register</Button>

      </div>
    </Box>
  );
}

export default Register;