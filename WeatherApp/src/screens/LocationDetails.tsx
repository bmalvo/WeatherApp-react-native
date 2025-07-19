import { ScrollView, StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS } from '../themes/colors';
import FollowingDays from '../components/FollowingDays';
import { fetchCityData, fetchFollowingDays } from '../services/api';
import Footer from '../components/Footer';
import { CityData, FollowingDay } from '../types/api';


export const LocationDetails = () => {

    const size = 80

    const [current, setCurrent] = useState<CityData | null>(null)
    const [followingDays, setFollowingDays] = useState<FollowingDay | null>()


    useEffect(() => {

        const init = async () => {
            
            const response = await fetchCityData()
            setCurrent(response)
            const followingDaysResponse = await fetchFollowingDays()
            setFollowingDays(followingDaysResponse)
        }

        init();

        return () => {

            setCurrent(null);
        }

    }, [])

    
    if (!current) {
        
        return <ActivityIndicator
            color={COLORS.sun}
            size={size}
            style={{ height: '100%', marginTop: 100 }} />
    }

    return (
        <ScrollView>

            <View style={styles.constainer}>
                <Text style={styles.cityName}>{ current.location.name}</Text>
                <Text style={styles.temperatures}>{ Math.round(current.current.temp_c)}°</Text>
                <View style={styles.weatherContainer}>
                    <Image
                        source={{
                            uri: `https:${current.current.condition.icon}`
                        }}
                        width={130}
                        height={130}
                        resizeMode='contain'
                    />
                    <Text style={styles.weather}>{ current.current.condition.text}</Text>
                </View>
                <View>
                    <View style={styles.followingDaysContainer}>
                        {followingDays?.forecast.forecastday.map((day, index, allDays) => (
                            // console.log(day)
                            <FollowingDays key={day.date} day={day} isLast={index === allDays.length -1 } />
                        ))}
                    </View>
                </View>
            </View>
            <Footer/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    constainer: {

        alignItems: 'center',
        backgroundColor: COLORS.background
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