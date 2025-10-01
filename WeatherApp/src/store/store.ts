import { configureStore } from '@reduxjs/toolkit'
import { weatherApi } from './api'
import { locationSlice } from './location';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
      
        location: locationSlice.reducer,
        [weatherApi.reducerPath]: weatherApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(weatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch