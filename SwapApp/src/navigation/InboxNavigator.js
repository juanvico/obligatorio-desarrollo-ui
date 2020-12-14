import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NAVIGATION } from '_constants';
import { Messages } from '_screens';

const Stack = createStackNavigator();

function InboxNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.inbox} component={Messages} />
    </Stack.Navigator>
  );
}

export default InboxNavigator;
