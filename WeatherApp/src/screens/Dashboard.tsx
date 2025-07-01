import { ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
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

    const [current, setCurrent] = useState()
    console.log('curent: ', current)
    let url = process.env.EXPO_PUBLIC_API_URL
    let key = process.env.EXPO_PUBLIC_API_KEY
    console.log('url -> ', url)
    console.log('key -> ', key)


    useEffect(() => {

        fetch(
            `${process.env.EXPO_PUBLIC_API_URL}/current.json?key=${process.env.EXPO_PUBLIC_API_KEY}&q=Zory`
        )
            .then((res) => res.json())
            .then((res) => setCurrent(res))
    }, [])
    console.log('curent: ',current)
    
    if (!current) {
        
        return <ActivityIndicator color={COLORS.sun} size='80' style={ {height: '100%', marginTop: 100}} />
    }

    return (
        <ScrollView>

            <View style={styles.constainer}>
                <Text style={styles.cityName}>Żory</Text>
                <Text style={styles.temperatures}>27°</Text>
                <View style={styles.weatherContainer}>
                    <Octicons name="sun" size={50} color={COLORS.sun} />
                    <Text style={styles.weather}>Słonecznie</Text>
                </View>
                <View>
                    <View style={styles.followingDaysContainer}>
                        {FOLLOWING_DAYS.map((item, index) => (
                    
                            <FollowingDays key={index} day={item} isLast={index === FOLLOWING_DAYS.length -1 } />
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
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
    },

    followingDaysContainer: {

        margin: 20, 
        marginTop: 40,
        backgroundColor: COLORS.lightBlue,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    }
})