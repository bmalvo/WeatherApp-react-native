import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '../themes/colors';
import * as Location from 'expo-location';
import { ListItem } from '../hooks/useLocationList';
import { getLocation, showDefaultErrorAlert, showPermissionDeniedAlert, showPermissionUnavialbeAlert } from '../utils/location';

interface SelectLocationByCoordinatesProps {

    onLocationFound: (item: Omit<ListItem, 'id'>) => void
};

const SelectLocationByCoordinates = ({ onLocationFound }: SelectLocationByCoordinatesProps) => {

    const onButtonPress = async () => {

        let { status } = await Location.requestForegroundPermissionsAsync();
        
        if (status === Location.PermissionStatus.DENIED) {
            
            showPermissionDeniedAlert()
        };
        if (status === Location.PermissionStatus.GRANTED) {

            try {

                const location = await getLocation()
                
                onLocationFound(location);
                // console.log(citydata)
            } catch (error: any) {
                
                if (error.code === 'E_LOCATION_UNAVAILABLE') {
                    
                    showPermissionUnavialbeAlert()
                } else {

                    showDefaultErrorAlert()
                }
            }
        }
    };

    return (
        <TouchableOpacity style={styles.button} onPress={onButtonPress}>
            <Ionicons name="location-outline" size={24} color={COLORS.text} />
        </TouchableOpacity>
    )
};

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
});