import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Octicons from '@expo/vector-icons/Octicons';
import { COLORS } from '../themes/colors';
import FollowingDays from '../components/FollowingDays';

const FOLLOWING_DAYS = [{
    name: 'dzisiaj',
    value: '22',
    type: 'słonecznie'
},
{
    name: 'sobota',
    value: '27',
    type: 'deszcz'
    },
    {
        name: 'niedziela',
        value: '17',
        type: 'burza'
    }]

export const Dashboard = () => {
    return (
        <View style={styles.constainer}>
            <Text style={styles.cityName}>Żory</Text>
            <Text style={styles.temperatures}>27°</Text>
            <View style={styles.weatherContainer}>
            <Octicons name="sun" size={50} color={COLORS.sun} />
            <Text style={styles.weather}>Słonecznie</Text>
            </View>
            <View>
                {FOLLOWING_DAYS.map((item, index) => (

                    <>
                        <FollowingDays day={item} index={index} />
                    </>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    constainer: {

        alignItems: 'center',
        marginTop: 10
    },

    weatherContainer: {

        alignItems: 'center'
    },

    cityName: {

        fontSize: 30,
        color: COLORS.text,
        marginTop: 20
    },

    temperatures: {

        fontSize: 70,
        fontWeight: 600,
        color: COLORS.text,
        marginTop: 20

    },

    weather: {

        fontSize: 26,
        color: COLORS.text
    }
})