import { ScrollView, StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import React from 'react';
import { COLORS } from '../themes/colors';
import FollowingDays from '../components/FollowingDays';
import Footer from '../components/Footer';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/Root';
import { useGetCityDataQuery, useGetFollowingDaysQuery } from '../store/api';


export const LocationDetails = () => {

    const size = 80;
    const { params: { location } } = useRoute<RouteProp<RootStackParamList, 'LocationDetails'>>();
    const { data: cityData } = useGetCityDataQuery({ location });
    const { data: followingDaysData } = useGetFollowingDaysQuery({ location });

    
    if (!cityData || !followingDaysData) {
        
        return <ActivityIndicator
            color={COLORS.sun}
            size={size}
            style={{ height: '100%', marginTop: 100 }} />
    }

    return (
        <ScrollView>

            <View style={styles.constainer}>
                <Text style={styles.cityName}>{cityData.location.name}</Text>
                <Text style={styles.temperatures}>{Math.round(cityData.current.temp_c)}°</Text>
                <View style={styles.weatherContainer}>
                    <Image
                        source={{
                            uri: `https:${cityData.current.condition.icon}`
                        }}
                        width={130}
                        height={130}
                        resizeMode='contain'
                    />
                    <Text style={styles.weather}>{cityData.current.condition.text}</Text>
                </View>
                <View>
                    <View style={styles.followingDaysContainer}>
                        {followingDaysData?.forecast.forecastday.map((day, index, allDays) => (
                            // console.log(day)
                            <FollowingDays
                                key={day.date}
                                day={day}
                                isLast={index === allDays.length - 1}
                                locationName={cityData.location.name}
                            />
                        ))}
                    </View>
                </View>
            </View>
            <Footer />
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    constainer: {

        alignItems: 'center',
        backgroundColor: COLORS.background,
        height: '100%'
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
});