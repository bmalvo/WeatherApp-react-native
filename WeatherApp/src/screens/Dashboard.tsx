import { ScrollView, StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS } from '../themes/colors';
import FollowingDays from '../components/FollowingDays';
import { fetchCityData, fetchFollowingDays } from '../services/api';

type CurrentProps = {
    
    current: {
        temp_c: number,

        condition: {
            text: string,
            icon: string
        }
    },

    location: {
        name: string
    }
}

type ForecastDay = {
    date: string;
    [key: string]: any; // Add more specific fields as needed
    type: string;
    day: {
        date: string,
        type: string,
        day: {
          avgtemp_c: string
        }     
      },
      isLast: boolean
};

type FollowingDaysProps = {

    forecast: {

        forecastday: ForecastDay[]
    },
    day: {
        date: string,
        type: string,
        day: {
          avgtemp_c: string
        }     
      },
      isLast: boolean
    }


// type Day = {
//     date: string;
//     type: string;
//     day: {
//         avgtemp_c: string;
//     }
// }

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

    const size = 80

    const [current, setCurrent] = useState<CurrentProps | null>()
    const [followingDays, setFollowingDays] = useState<FollowingDaysProps | null>()


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

    return (
        <ScrollView>

            <View style={styles.constainer}>
                <Text style={styles.cityName}>{ current.location.name}</Text>
                <Text style={styles.temperatures}>{ current.current.temp_c}°</Text>
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
                    
                            <FollowingDays key={day.date} day={day} isLast={index === allDays.length -1 } />
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