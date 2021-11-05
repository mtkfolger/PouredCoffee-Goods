import React from "react";
import "../App.css";

import { Box } from "@mui/system";
import { TextField, Button, Stack} from "@mui/material";

function Login() {
  return (
    <div>
      <h1 className="home-para">Login</h1>
      <hr className="line"></hr>

      <Box className="box"
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Email Address / Username" variant="outlined" />
      <TextField id="outline-basic" label="password" variant="outlined" />
    </Box>

    <Button className="button" variant="contained">Login</Button>
    </div>
  );
}

export default Login;
