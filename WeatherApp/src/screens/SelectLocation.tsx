import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../themes/colors'
import { useNavigation } from 'expo-router'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/Root'

const SelectLocation = () => {

  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate('LocationDetails')}>
      <Text>SelectLocation</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SelectLocation

const styles = StyleSheet.create({

  container: {

    backgroundColor: COLORS.background,
    height: '100%'
  }
})