import React from 'react';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";

import Login from './components/screens/Login/Login';
import Register from './components/screens/Register/Register';
import Home from './components/screens/Home/Home';
import ItemDetailContainer from './components/screens/ItemDetailContainer/ItemDetailContainer'
import AddItemContainer from './components/screens/AddItemContainer/AddItemContainer'

const Routes = () => {
    return (
        <>
            <Router>
                <Route exact path='/' component={Login} />
                <Route exact path='/signup' component={Register} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/add' component={AddItemContainer} />
                <Route exact path='/item/:id' component={ItemDetailContainer} />
            </Router>
        </>
    )
}

export default Routes;