import { useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NAVIGATION } from '_constants';
import { Profile, MyItems } from '_screens';

const Stack = createStackNavigator();

function ProfileNavigator() {
  const { colors } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION.profile}
        component={Profile}
        options={{
          
        }}
      />
      <Stack.Screen
        name={NAVIGATION.myItems}
        component={MyItems}
      />
    </Stack.Navigator>
  );
}

export default ProfileNavigator;
