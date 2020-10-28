import React from 'react';
import './App.css';
import Routes from './Routes';
import client from './apollo-client/client';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
const App = () => {
  return (
    <div className="app">
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes />
        </Router>
        </ThemeProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
