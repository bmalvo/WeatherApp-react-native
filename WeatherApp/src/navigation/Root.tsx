import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LocationDetails } from '../screens/LocationDetails';

const Stack = createNativeStackNavigator();

export const Root = () => {
  return (
      <Stack.Navigator
          screenOptions={{
              
              headerShown: false
            }}
      >
          <Stack.Screen name='LocationDetails' component={LocationDetails}/>
    </Stack.Navigator>
  )
}