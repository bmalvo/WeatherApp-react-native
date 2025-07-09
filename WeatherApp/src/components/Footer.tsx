import { Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../themes/colors';


const Footer = () => {
  return (
    <View style={styles.container}>
      <Text>Powered by</Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://www.weatherapi.com/')} >WeatherAPI.com</Text> 
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({

  container: {

    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 20,
    
  },

  text: {

    color: COLORS.sun
  },

  link: {

    color: '#450E6',
  }
})