import React from 'react';
import dayjs from 'dayjs';
import { ForecastDay } from '../types/api';
import ListItem from './ListItem';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/Root';

interface FollowingDaysProps {

  day: ForecastDay;
  isLast?: boolean;
  locationName: string;
};


const FollowingDays = ({ day, isLast = false, locationName }: FollowingDaysProps) => {
  
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const date = dayjs(day.date).isToday() ? 'dzisiaj' : dayjs(day.date).format('dddd')

  return (

    <ListItem

      isLast={isLast}
      title={date}
      value={`${Math.floor(day.day.mintemp_c)}°C - ${Math.ceil(day.day.maxtemp_c)}°C`}
      condition={day.day.condition}
      onPress={() => navigate('DayDetails', { day, locationName })}

    />
  );
};

export default FollowingDays