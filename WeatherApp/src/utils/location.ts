import { Alert } from "react-native";
import * as Location from 'expo-location';
import { weatherApi } from '../store/api';
import { store } from '../store/store';


export const showPermissionDeniedAlert = () => {

    Alert.alert('Brak uprawnień',
        'Aby móc korzystać z funkcjonalności przejdź do ustawień i zezwól na pobieranie lokalizacji');
};

export const showPermissionUnavialbeAlert = () => {

    Alert.alert("lokalizacja niedostępna", "funkcjonalność jest wyłączona")
};

export const showDefaultErrorAlert = () => {

    Alert.alert("Lokalizacja niedostępna", "Pobieranie lokalizacji nie powiodło się")
};

const getLocationName = async (location: Location.LocationObject) => {

    try {

        const citydata = await store.dispatch(weatherApi.endpoints.getCityData.initiate({
            
            location: `${location.coords.latitude}, ${location.coords.longitude}`
        })).unwrap()
                
        return citydata.location.name
        
    } catch {
        
        
        return `${location.coords.latitude}, ${location.coords.longitude}`
    }
};

export const getLocation = async () => {

    const location = await Location.getCurrentPositionAsync();
    const locationName = await getLocationName(location);

    return {

        title: locationName,
        value: `${location.coords.latitude}, ${location.coords.longitude}`
    }
};   