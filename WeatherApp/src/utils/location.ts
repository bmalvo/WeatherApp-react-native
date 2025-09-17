import { Alert } from "react-native"
import * as Location from 'expo-location';
import { fetchCityData } from "../services/api";


export const showPermissionDeniedAlert = () => {

    Alert.alert('Brak uprawnień',
                    'Aby móc korzystać z funkcjonalności przejdź do ustawień i zezwól na pobieranie lokalizacji')
}

export const showPermissionUnavialbeAlert = () => {

    Alert.alert("lokalizacja niedostępna", "funkcjonalność jest wyłączona")
}

export const showDefaultErrorAlert = () => {

    Alert.alert("Lokalizacja niedostępna", "Pobieranie lokalizacji nie powiodło się")
}

const getLocationName = async(location: Location.LocationObject) => {

    const citydata = await fetchCityData(`${location.coords.latitude}, ${location.coords.longitude}`)

    if ('location' in citydata) {
        
        return citydata.location.name
    }

    return `${location.coords.latitude}, ${location.coords.longitude}`
}

export const getLocation = async() => {

    const location = await Location.getCurrentPositionAsync();
    const locationName = await getLocationName(location);

    return {

        title: locationName,
        value: `${location.coords.latitude}, ${location.coords.longitude}`
    }
}   