import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CityData, FollowingDay } from '../types/api';


export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_API_URL }),
    endpoints: (build) => ({
      
        getCityData: build.query<CityData, { location: string }>({
          
            query: ({ location }) => {
              
                return {
                  
                    url: 'current.json',
                    params: {
                      
                        key: process.env.EXPO_PUBLIC_API_KEY,
                        lang: 'pl',
                        q: location
                    }
                };
            }
        }),
        getFollowingDays: build.query<FollowingDay, { location: string }>({
          
            query: ({ location }) => {
                return {
                  
                    url: 'forecast.json',
                    params: {
                        key: process.env.EXPO_PUBLIC_API_KEY,
                        lang: 'pl',
                        days: 7,
                        q: location
                    }
                }
            }
        })
    })
});

export const { useGetCityDataQuery, useGetFollowingDaysQuery } = weatherApi