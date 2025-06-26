import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Octicons from '@expo/vector-icons/Octicons';

export default function Dashboard() {
    return (
        <View style={styles.constainer}>
            <Text style={styles.cityName}>Żory</Text>
            <Text style={styles.temperatures}>27°C</Text>
            <Octicons name="sun" size={50} color="yellow" />
        </View>
    )
}

const styles = StyleSheet.create({

    constainer: {

        alignItems: 'center'
    },
    cityName: {

        fontSize: 30,
        color: 'white'
    },

    temperatures: {

        fontSize: 50,
        color: 'white'
    }
})