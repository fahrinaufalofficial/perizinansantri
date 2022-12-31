import React from 'react';
import {Home, Splash} from '../pages';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
 
const Stack = createNativeStackNavigator();
 
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
 
export default Router;