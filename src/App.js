/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import * as React from 'react';
 import {NavigationContainer} from '@react-navigation/native';
 import {createNativeStackNavigator} from '@react-navigation/native-stack';
 import Home from './pages/Home';
 import Splash from './pages/Splash';
 const Stack = createNativeStackNavigator();
  
 function App() {
   return (
     <NavigationContainer>
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
     </NavigationContainer>
   );
 }
 


export default App;
