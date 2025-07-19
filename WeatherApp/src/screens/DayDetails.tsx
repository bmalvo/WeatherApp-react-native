import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CityData, FollowingDay } from '../types/api'
import { fetchCityData, fetchFollowingDays } from '../services/api'
import { COLORS } from '../themes/colors'
import dayjs from 'dayjs'
import ListItem from '../components/ListItem'

const DayDetails = () => {

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
    
        console.log(followingDays)
        
        if (!current) {
            
            return <ActivityIndicator
                color={COLORS.sun}
                size={size}
                style={{ height: '100%', marginTop: 100 }} />
    };

const day = followingDays?.forecast.forecastday[0]
const locationName = 'Radlin';
    
    if (!day) {
            
            return <ActivityIndicator
                color={COLORS.sun}
                size={size}
                style={{ height: '100%', marginTop: 100 }} />
        }

    return (
        <FlatList
            data={day.hour}
            ListHeaderComponent={
                <View>
                    <View style={styles.container}>
                        <Text style={[styles.location, styles.text]}>{locationName}</Text>
                        <Text style={[styles.date, styles.text]}>{dayjs(day?.date).format('dddd, D MMM YYYY')}</Text>
                        <Image
                            source={{ uri: `https:${day?.day.condition.icon}` }}
                            width={100}
                            height={100}
                        />
                        <Text style={[styles.temperature, styles.text]}>
                            {`${Math.floor(day.day.mintemp_c)}°C - ${Math.ceil(day.day.maxtemp_c)}°C`}
                        </Text>
                    </View>
                </View>}
            renderItem={({ item: hour, index }) => {

                const isLats = index === day.hour.length - 1

                return (
                    <View style={[styles.item, index === 0 && styles.firstItem, isLats && styles.lastItem]}>

                        <ListItem
                    
                            key={hour.time}
                            isLast={isLats}
                            title={hour.time}
                            value={hour.temp_c}
                            condition={hour.condition}
                        />
                    </View>
                )
            }
            }
        />
    );
}

export default DayDetails

const styles = StyleSheet.create({

    container: {

        alignItems: 'center'
    },
    location: {

        fontSize: 30,
        fontWeight: 'bold',
    },
    date: {

        fontSize: 26,
        marginBottom: 20
    },
    temperature: {

        fontSize: 40,
        fontWeight: '600',
    },
    text: {

        color: COLORS.text,
        marginTop: 20
    },

    item: {

        backgroundColor: COLORS.lightBlue,
        marginHorizontal: 20,
        paddingHorizontal: 20,

    },

    firstItem: {

        marginTop: 40,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingTop: 10
    },

    lastItem: {

        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingBottom: 10,
        marginBottom: 20
    }
});