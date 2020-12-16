import React from 'react';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import Setup from '_Setup';
import { store } from '_store';
import apolloClient from './client/apollo-client';

enableScreens();

function App() {

  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <Setup />
      </Provider>
    </ApolloProvider>
  );
}

export default App;
