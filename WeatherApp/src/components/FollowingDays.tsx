import React from 'react'
import dayjs from 'dayjs'
import { ForecastDay } from '../types/api'
import ListItem from './ListItem'


const FollowingDays = ({ day, isLast }: { day: ForecastDay; isLast: boolean }) => {
  
  const date = dayjs(day.date).isToday() ? 'dzisiaj' : dayjs(day.date).format('dddd')

  return (
    <ListItem

      isLast={isLast}
      title={date}
      value={`${Math.floor(day.day.mintemp_c)}°C - ${Math.ceil(day.day.maxtemp_c)}°C`}
      condition={day.day.condition}

    />
  );
}

export default FollowingDays