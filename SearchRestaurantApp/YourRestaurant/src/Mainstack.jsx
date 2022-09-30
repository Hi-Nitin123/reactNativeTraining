import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import ResultScreen from './Screens/ResultScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'Welcome to login Page'}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Explore the best restaurants around you'}}
      />
      <Stack.Screen
        name="ResultScreen"
        component={ResultScreen}
        options={{title: 'Some Similar results'}}
      />
      {/* <Stack.Screen
        name="Product"
        component={Product}
        options={{title: 'Here are your products'}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{title: 'Here is your product'}}
      /> */}
    </Stack.Navigator>
  );
};

export default MainStack;
