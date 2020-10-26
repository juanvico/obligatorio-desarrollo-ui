import React from 'react';
import { TextField } from '@material-ui/core';
import ProceedWithAlternativeLink from '../../common/ProceedWithAlternativeLink/ProceedWithAlternativeLink'
import './Register.css'

function Register() {

    function handleRegistration() {

    }

	return (
	  <div className="register-container">
          <div className="register-content">
            <div className="register-title"> 
                <label>Bienvenido, registrate!</label>
            </div>
            <div>
                <div><TextField required id="name-input" label="Name" /></div>
                <div><TextField required id="username-input" label="Username" /></div>
                <div><TextField required id="password-input" label="Password" /></div>
                <div><TextField required id="password-input" label="Confirm Password" /></div>
                <ProceedWithAlternativeLink
                     proceed={{
                         text:"Register",
                         action: {handleRegistration},
                        }}

                        alternative= {{
                            text: "Already have an account? Log in.",
                            link:"/"
                        }}
                    />
            </div>
          </div>
	  </div>
	);
  }
  
  export default Register; 