import React from 'react';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home/Home';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import AddItemContainer from './components/AddItemContainer'

const Routes = () => {
    return (
        <>
            <Router>
                <Route exact path='/' component={Login} />
                <Route exact path='/signup' component={Register} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/add' component={AddItemContainer} />
                <Route exact path='/items/:id' component={ItemDetailContainer} /> 
            </Router>
        </>
    )
}

export default Routes;