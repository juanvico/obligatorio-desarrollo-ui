import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import NavigationMenu from '../../common/NavigationMenu'
import ProceedWithAlternativeLink from '../../common/ProceedWithAlternativeLink/ProceedWithAlternativeLink'

import './Login.css'

function Login() {

	function handleLogin() {

	}

	return (
	  <div className="login-container">
		<div className="login-content">
			<div className="login-title"> 
				<label>Bienvenido!</label>
			</div>
			<div className="login-details">
				<div><TextField required id="username-input" label="Username" /></div>
				<div><TextField required id="password-input" label="Password" type="password" /></div>
				<ProceedWithAlternativeLink
                     proceed={{
                         text:"Login",
                         action: {handleLogin},
                        }}

                        alternative= {{
                            text: "Don't have an account? Sign up.",
                            link:"/signup"
                        }}
                    />
			</div>
		</div>
	  </div>
	);
  }
  
  export default Login; 