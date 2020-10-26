import React from 'react';
import './Home.css'
import NavigationMenu from '../../common/NavigationMenu'
import ItemCard from './components/ItemCard/ItemCard';

function Home() {
    return (
        <div className='home-container'>
            <NavigationMenu/>
            <div className="home-content">
                <div className="home-title">
                    Welcome back to ReBuy! Explore the availability below and start saving the planet one item at a time! 
                </div>
                    <div className="home-items">
                <ItemCard item={{
                    id: 1,
                    name: "Teapot Set",
                    imageURL: "https://www.pexels.com/photo/clear-glass-teapot-set-1362537/",
                    description: "Mi descripcion es mas larga que el nombre quizas",
                }}/>
                </div>
            </div>
        </div>
	);
  }
  
  export default Home; 