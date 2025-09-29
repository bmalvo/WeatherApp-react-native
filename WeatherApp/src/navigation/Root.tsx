import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LocationDetails } from '../screens/LocationDetails';
import DayDetails from '../screens/DayDetails';
import SelectLocation from '../screens/SelectLocation';
import { ForecastDay } from '../types/api';
import { COLORS } from '../themes/colors';

export type RootStackParamList = {

  SelectLocation: undefined;
  LocationDetails: {

    location: string;
    
  };
  DayDetails: {

    day: ForecastDay;
    locationName: string;
  };
};

const Stack = createNativeStackNavigator();

export const Root = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        
        title: '',
        headerBackTitle: '',
        headerShadowVisible: false,
        headerTintColor: COLORS.link
      }}
      initialRouteName='SelectLocation'
    >
      <Stack.Screen name='LocationDetails' component={LocationDetails} />
      <Stack.Screen name='DayDetails' component={DayDetails} />
      <Stack.Screen name='SelectLocation' component={SelectLocation} />
    </Stack.Navigator>
  )
};