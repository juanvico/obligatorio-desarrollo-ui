import React from 'react';
import { TextField, Button } from '@material-ui/core';
import NavigationMenu from '../../common/NavigationMenu'

import './Login.css'

function Login() {

	return (
	  <div className="login-container">
		  <div className="login-title"> 
		  	<label>Bienvenido!</label>
		  </div>
		  <div>
		  <TextField required id="username-input" label="Username" />
          <TextField required id="password-input" label="Password" type="password" />
		  <Button variant="contained" color="primary">Login</Button>
		  <Button variant="contained" color="secondary" href="/register"> Register </Button>
		  </div>
	  </div>
	);
  }
  
  export default Login; 