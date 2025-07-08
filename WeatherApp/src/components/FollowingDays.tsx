import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Octicons from '@expo/vector-icons/Octicons'
import { COLORS } from '../themes/colors'

type FollowingdaysProps = {

  day: {
    date: string,
    type: string,
    day: {
      avgtemp_c: string
    }     
  },
  isLast: boolean
}

const FollowingDays = ({day, isLast}:FollowingdaysProps) => {
  return (
    <View style={[styles.container, !isLast && styles.separator]}>
      <Text style={styles.content}>{day.date}</Text>
      <Text style={[styles.content, styles.value]}>{day.day.avgtemp_c}</Text>
      {<Octicons
        name="sun" size={20}
        // color={COLORS.sun}
        style={ [styles.content, styles.type]} />}
    </View>
  )
}

export default FollowingDays

const styles = StyleSheet.create({

  container: {

    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
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