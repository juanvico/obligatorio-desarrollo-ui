import React from 'react';
import './App.css';
import client from './apollo-client/client';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

import AuthProvider, { useToken } from "./Auth/AuthProvider";
import { NavigationContainer } from "@react-navigation/native";
import {  CardStyleInterpolators,
  createStackNavigator, } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <RootNavigation />
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  );
}


const RootNavigation = () => {
  const { token } = useToken();
  return (
    <NavigationContainer>
      {/* <View style={styles.container}> */} 
      <Stack.Navigator initialRouteName="Home">
        {token ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Add" component={AddItemContainer} />
            <Stack.Screen name="SendMessage" component={SendMessageContainer} />
            <Stack.Screen name="Messages" component={MessagesContainer} />
          </>
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              header: () => null
            }}
          />
        )}
      </Stack.Navigator>
      {/* </View> */}
    </NavigationContainer>
  );
};


export default App;
