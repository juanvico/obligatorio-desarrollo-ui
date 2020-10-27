import React from 'react';
import './App.css';
import Routes from './Routes';
import client from './apollo-client/client';
import { ApolloProvider } from '@apollo/client';
import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <CookiesProvider>
        <ApolloProvider client={client}>
          <Router>
            <Routes />
          </Router>
        </ApolloProvider>
      </CookiesProvider>
    </div>
  );
}

export default App;
