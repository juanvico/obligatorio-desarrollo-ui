import React from 'react';
import './AddItemContainer.css'
import NavigationMenu from '../../common/NavigationMenu'
import { TextField } from '@material-ui/core';
import ProceedWithAlternativeLink from '../../common/ProceedWithAlternativeLink/ProceedWithAlternativeLink'

import './AddItemContainer.css'

function AddItemContainer() {

	function handleAdition() {

	}

    return (
	  <div className="add-item-container">
          <NavigationMenu/>
		<div className="add-item-content">
			<div className="add-item-title"> 
				<label>Agrega un item!</label>
			</div>
			<div className="login-details">
            <div><TextField required id="title-input" label="Title" /></div>
            <div><TextField multiline id="description-input" label="Description" /></div>
            <div><TextField multiline id="pickup-input" label="Pickup Details" /></div>
				<ProceedWithAlternativeLink
                     proceed={{
                         text:"Add item",
                         action: {handleAdition},
                        }}

                        alternative= {{
                            text: "Cancel",
                            link:"/home"
                        }}
                    />
			</div>
		</div>
	  </div>
	);
  }
  
  export default AddItemContainer; 