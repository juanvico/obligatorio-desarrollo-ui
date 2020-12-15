import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NAVIGATION } from '_constants';
import { Home } from '_screens';
import { CreateMessage } from '_screens';

const Stack = createStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.home} component={Home} />
      <Stack.Screen name={NAVIGATION.createMessage} component={CreateMessage} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
