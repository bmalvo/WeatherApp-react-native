import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../themes/colors'
import dayjs from 'dayjs'
import 'dayjs/locale/pl'
import isToday from 'dayjs/plugin/isToday';
import { ForecastDay } from '../types/api'

dayjs.extend(isToday)
dayjs.locale('pl')



const FollowingDays = ({ day, isLast }: { day: ForecastDay; isLast: boolean }) => {
  
  const date = dayjs(day.date).isToday() ? 'dzisiaj' : dayjs(day.date).format('dddd')

  return (
    <View style={[styles.container, !isLast && styles.separator]}>
      <Text style={styles.content}>{date}</Text>
      <Text style={[styles.content, styles.value]}>{Math.floor(day.day.mintemp_c)}°-{Math.ceil(day.day.maxtemp_c)}°</Text>
      <Image
        source={{
          uri: `https:${day.day.condition.icon}`
        }}
        width={40}
        height={40}
        resizeMode='contain'
      />
    </View>
  );
}

export default FollowingDays

const styles = StyleSheet.create({

  container: {

    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 40
  },

  separator: {

    borderWidth: 1,
    borderColor: COLORS.background
  },

  content: {

    flex: 1,
    color: COLORS.text
  },

  value: {

    textAlign: 'center',
    fontWeight: '600'
  },

  type: {

    textAlign: 'right',
    color: COLORS.sun
  }
})