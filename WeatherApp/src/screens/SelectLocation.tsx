import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../themes/colors'
import { useNavigation } from 'expo-router'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/Root'

type ListItem = {

  title: string;
  value: string;

}

const SelectLocation = () => {

  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [value, setValue] = useState('');
  const [list, setList] = useState<ListItem[]>([]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='wpisz lokalizację'
        placeholderTextColor={'magenta'}
        selectionColor={'magenta'}
        onChangeText={setValue}
        value={value}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
        
          setList([...list, {title: value, value: value}]);
          setValue('');
      }}>
        <Text style={styles.buttonText}>
          Dodaj
        </Text>
      </TouchableOpacity>

      <View>

      {list.map((item) =>
        
        <View style={styles.item}>
        <Text>{item.title}</Text>
        </View>
      )}
      </View>
    </View>
  )
}

export default SelectLocation

const styles = StyleSheet.create({

  container: {

    backgroundColor: COLORS.background,
    height: '100%',
    padding: 10
  },

  input: {

    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.link,
    padding: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    color: COLORS.text,
    borderRadius: 10
  },

  button: {

    width: '100%',
    backgroundColor: COLORS.link,
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {

    color: COLORS.text,
    fontSize: 16
  },

  item: {

    width: '100%',
    backgroundColor: COLORS.lightBlue,
    marginBottom: 10
  }
})