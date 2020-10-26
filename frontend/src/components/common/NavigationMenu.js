import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function NavigatonMenu( {text} ) {
    return (
        <div className='menu-container'>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className="menu-button" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className="menu-title">
                 {text}
                </Typography>
                </Toolbar>
      </AppBar>
        </div>
	);
  }
  
  export default NavigatonMenu; 