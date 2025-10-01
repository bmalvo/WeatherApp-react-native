import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListItem } from "../hooks/useLocationList";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

interface locationState {

    locations: ListItem[]
}

const initialState: locationState = {

    locations: [],
} 

const locationSlice = createSlice({

    name: 'location',
    initialState,
    reducers: {

        addLocation: (state, { payload }: PayloadAction<Omit<ListItem, 'id'>>) => {
            
            state.locations.push({ id: uuidv4(), ...payload })
        },

        removeLocation: (state, { payload }: PayloadAction<ListItem>) => {
            
            const toRemoveIndex = state.locations.findIndex((listElement) => listElement.id === payload.id);

            if (toRemoveIndex !== -1) {

                state.locations.splice(toRemoveIndex, 1);
            }
        }
    }
});

const {addLocation, removeLocation} = locationSlice.actions

export {
    locationSlice,
    addLocation,
    removeLocation
}