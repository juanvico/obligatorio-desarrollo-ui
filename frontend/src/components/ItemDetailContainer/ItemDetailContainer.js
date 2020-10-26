import React from 'react';
import NavigationMenu from '../NavigationMenu'
import Gallery from './components/Gallery/Gallery'
import PickupDetails from './components/PickupDetails/PickupDetails'
import UserDetails from './components/UserDetails/UserDetails'
import './ItemDetailContainer.css'

function ItemDetailContainer() {

	//TODO: change this hardcoded
	const item = {  
        name: "Teapot Set",
		owner: {
			name: 'Mary Publisher',
			email: 'mary@mail.com'
		},
		pickUp: {

		},
		imageURL: "https://www.pexels.com/photo/clear-glass-teapot-set-1362537/",
		description: "This is my random description, it is probably a bit random. Oh random? Hardcoded.",
		images: []
	}

	return (
	  	<div className="item-detail-container">
			<NavigationMenu/>
			<div className="add-item-content">

				<div className="title">
					{item.name}
					</div>
				<Gallery images={item.images}/>
				<div className="description">
					<label> {item.description} </label>
				</div>
				<PickupDetails user={item.pickUp}/>
				<UserDetails user={item.owner}/>
			</div>
		</div>
	);
  }
  
  export default ItemDetailContainer; 