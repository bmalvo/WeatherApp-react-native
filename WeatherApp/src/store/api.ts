import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CityData } from '../types/api'


export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_API_URL }),
  endpoints: (build) => ({
      
      getCityData: build.query<CityData, {location: string}>({
          
          query: ({location}) => {
              
              return {
                  
                  url: 'current.json',
                  params: {
                      
                      key: process.env.EXPO_PUBLIC_API_KEY,
                      lang: 'pl',
                      q: location
                  }
              }
          }
      })
  }),
})

export const { useGetCityDataQuery } = weatherApi