import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from '../themes/colors';
import { useNavigation } from 'expo-router';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/Root';
import SearchInput from '../components/SearchInput';
import { useLocationList } from '../hooks/useLocationList';
import Ionicons from '@expo/vector-icons/Ionicons';
import SelectLocationByCoordinates from '../components/SelectLocationByCoordinates';


const SelectLocation = () => {

  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { list, addToList, removeFromList } = useLocationList();



  return (

    <FlatList
      ListHeaderComponent={
        <SearchInput
          onSearch={(value) => addToList({ title: value, value: value })}
          rightElement={<SelectLocationByCoordinates onLocationFound={(item) => addToList(item)} />} />
      }
      data={list}
      ListHeaderComponentStyle={styles.header}
      renderItem={({ item }) => (

        <TouchableOpacity
          style={styles.item}
          onPress={() => navigate('LocationDetails', { location: item.value })}>
          <Text style={styles.itemText}>{item.title}</Text>
          <TouchableOpacity onPress={() => { removeFromList(item) }}>
            <Ionicons name="trash-outline" size={24} color={COLORS.error} />
          </ TouchableOpacity>
        </ TouchableOpacity>
      )}
      contentContainerStyle={styles.container}
      keyExtractor={(item) => item.id}
    />
  )
};

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
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  itemText: {

    color: COLORS.text,
    fontSize: 16
  }

});