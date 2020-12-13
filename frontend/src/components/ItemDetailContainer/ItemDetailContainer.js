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
	  	<Container className="item-detail-container">
			<NavigationMenu/>
			<row className="add-item-content">

				<p className="title">
					{item.name}
					</p>
				<Gallery images={item.images}/>
				<p className="description">
					<label> {item.description} </label>
				</p>
				<PickupDetails user={item.pickUp}/>
				<UserDetails user={item.owner}/>
			</row>
		</Container>
	);
  }
  
  export default ItemDetailContainer; 