import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import HomePage from './screens/HomePage';
import Product from './screens/Product';
import ProductDetails from './screens/ProductDetails';

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
        options={{title: 'Welcome to Your shopping cart'}}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{title: 'Here are your products'}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{title: 'Here is your product'}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
