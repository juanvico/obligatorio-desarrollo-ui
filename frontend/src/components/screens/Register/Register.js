import React from 'react';
import { TextField, Button } from '@material-ui/core';

import './Register.css'

function Register() {
	return (
	  <div className="register-container">
		  <div className="register-title"> 
		  	<label>Bienvenido, registrate!</label>
		  </div>
		  <div>
		  <TextField required id="name-input" label="Name" />
		  <TextField required id="username-input" label="Username" />
          <TextField required id="password-input" label="Password" type="password" />
          <Button variant="contained">Register</Button>
        </div>
	  </div>
	);
  }
  
  export default Register; 