import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './Screens/LoginScreen';
import HomePage from './Screens/HomePage';
import Profile from './Screens/Profile';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'Welcome to login Page'}}
      />

      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{title: 'Welcome to Home Page'}}
      />
      <Stack.Screen
        name="ProfilePicture"
        component={Profile}
        options={{title: 'Your profile'}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
