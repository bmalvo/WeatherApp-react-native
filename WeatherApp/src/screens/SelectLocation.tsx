import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../themes/colors'
import { useNavigation } from 'expo-router'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/Root'
import SearchInput from '../components/SearchInput'

type ListItem = {

  title: string;
  value: string;

}

const SelectLocation = () => {

  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [list, setList] = useState<ListItem[]>([]);

  return (

    <FlatList
      ListHeaderComponent={<SearchInput  onSearch={(value) => setList([...list, {title: value, value: value}])}/>}
      data={list}
      ListHeaderComponentStyle={styles.header}
      renderItem={({ item }) => (

        <View style={styles.item}>
          <Text style={styles.itemText}>{item.title}</Text>
        </View>
      )}
      contentContainerStyle={styles.container}
    />
  )
}

export default SelectLocation

const styles = StyleSheet.create({

  container: {

    backgroundColor: COLORS.background,
    height: '100%',
    padding: 20
  },

  header: {

    marginBottom: 40
  },

  listContainer: {

    width: '100%',
    marginTop: 40
  },

  item: {

    width: '100%',
    backgroundColor: COLORS.lightBlue,
    marginBottom: 10,
    padding: 20,
    borderRadius: 10
  },

  itemText: {

    color: COLORS.text,
    fontSize: 16
  }

});