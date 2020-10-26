import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './ProceedWithAlternativeLink.css'

function ProceedWithAlternativeLink({ proceed,  alternative}) {  
    return (
      <div className="proceed-with-alternative-container">
            <div><Button variant="contained" onClick={proceed.action}>{proceed.text}</Button></div>
            <div className="alternative-content"><Link to={alternative.link}> {alternative.text} </Link></div>
      </div>
    );
  }
  
  export default ProceedWithAlternativeLink; 