import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '../themes/colors';
import * as Location from 'expo-location';

const SelectLocationByCoordinates = () => {

    const onButtonPress = async () => {

        let { status } = await Location.requestForegroundPermissionsAsync();
        
        if (status === Location.PermissionStatus.DENIED) {
            
            Alert.alert('Brak uprawnień', 'Aby móc korzystać z funkcjonalności przejdź do ustawień i zezwól na pobieranie lokalizacji')
        }
    }


    return (
        <TouchableOpacity style = {styles.button} onPress={onButtonPress}>
            <Ionicons name="location-outline" size={24} color={COLORS.text} />
        </TouchableOpacity>
    )
}

export default SelectLocationByCoordinates

const styles = StyleSheet.create({

    button: {
        
        width: 50,
        height: 50,
        backgroundColor: COLORS.lightBlue,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        alignSelf: 'center'
    }
})