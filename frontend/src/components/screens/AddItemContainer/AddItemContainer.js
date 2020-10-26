import React from 'react';
import './AddItemContainer.css'
import NavigationMenu from '../../common/NavigationMenu'

function AddItemContainer() {

    const item = {
        name: "Teapot Set",
        imageURL: "https://www.pexels.com/photo/clear-glass-teapot-set-1362537/",
        description: "Mi descripcion es mas larga que el nombre quizas",
    }

    return (
        <div className='add-item-container'>
            <NavigationMenu/>
            This is the item page:  brindando el punto de entrada principal al contenido
            ○ Descripción

            <div className="add-item-content">

            <div className="title">

            </div>

            <div className="gallery">

            </div>

            <div className="description">
                
            </div>

            <div className="pickup-details">

            </div>

            <div className="user details">

            </div>

            </div>
        </div>
	);
  }
  
  export default AddItemContainer; 