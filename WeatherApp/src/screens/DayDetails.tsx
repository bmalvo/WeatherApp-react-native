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
    }

const day = followingDays?.forecast.forecastday[0];
const locationName = 'Radlin';

  return (
    <View>
      <Text>{locationName}</Text>
          <Text>{dayjs(day?.date).format('dddd, D MMM YYYY')}</Text>
          <Image
              source={{ uri: `https:${day?.day.condition.icon}` }}
              width={100}
          height={100}/>
    </View>
  )
}

export default DayDetails

const styles = StyleSheet.create({})