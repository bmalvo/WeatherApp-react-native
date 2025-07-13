import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CityData, FollowingDay } from '../types/api'
import { fetchCityData, fetchFollowingDays } from '../services/api'
import { COLORS } from '../themes/colors'
import dayjs from 'dayjs'

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
  )
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
    }
})