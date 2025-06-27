import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Octicons from '@expo/vector-icons/Octicons'
import { COLORS } from '../themes/colors'

type FollowingdaysProps = {

    day: {
        name: string,
        value: string,
        type: string
    },
    index: number
}

const FollowingDays = ({day, index}:FollowingdaysProps) => {
  return (
    <View>
      <Text key={index}>{ day.name}</Text>
                          <Text key={index}>{ day.value}</Text>
                          {<Octicons name="sun" size={20} color={COLORS.sun} />}
    </View>
  )
}

export default FollowingDays

const styles = StyleSheet.create({})