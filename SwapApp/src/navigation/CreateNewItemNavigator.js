import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NAVIGATION } from '_constants';
import { CreateItem } from '_screens';

const Stack = createStackNavigator();

function CreateNewItemNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.createItem} component={CreateItem} />
    </Stack.Navigator>
  );
}

export default CreateNewItemNavigator;
