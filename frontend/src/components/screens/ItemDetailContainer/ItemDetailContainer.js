import React from 'react';
import NavigationMenu from '../../common/NavigationMenu'
import Gallery from './components/Gallery/Gallery'
import PickupDetails from './components/PickupDetails/PickupDetails'
import UserDetails from './components/UserDetails/UserDetails'
import './ItemDetailContainer.css'

function ItemDetailContainer() {

	//TODO: change this hardcoded
	const item = {  
		name: 'username',
		owner: {
			name: 'Mary Publisher'
		},
		pickUp: {

		},
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