import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import NavigationMenu from '../../common/NavigationMenu'

import './Login.css'

function Login() {

	return (
	  <div className="login-container">
		<div className="login-content">
			<div className="login-title"> 
				<label>Bienvenido!</label>
			</div>
			<div className="login-details">
				<div><TextField required id="username-input" label="Username" /></div>
				<div><TextField required id="password-input" label="Password" type="password" /></div>
				<div><Button variant="contained" color="primary">Login</Button></div>			
				<div><Link to='/register'> No tienes cuenta? Registrate </Link></div>
			</div>
		</div>
	  </div>
	);
  }
  
  export default Login; 