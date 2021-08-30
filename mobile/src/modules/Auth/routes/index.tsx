import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen, LoginScreen, CreateAccountScreen } from '../screens';

export const AuthNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
    </Stack.Navigator>
  );
};
