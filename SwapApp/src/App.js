import React, { useEffect } from 'react';
import { hide } from 'react-native-bootsplash';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import RootNavigator from '_navigation';
import { persistor, store } from '_store';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'localhost:5000/graphql',
  cache: new InMemoryCache()
});

enableScreens();

function App() {
  const hideSplashScreen = async () => {
    await hide({ fade: true });
  };

  useEffect(() => {
    persistor(hideSplashScreen);
  }, []);

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </ApolloProvider>
  );
}

export default App;
