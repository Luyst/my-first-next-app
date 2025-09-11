import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

type WhereState = {
    name?: string;
}
type WhenState = {
    checkIn?: Date | null;
    checkOut?: Date | null;
}

type WhoState = {
    adults: number;
    children: number;
    infants: number;
    pets: number;

}


interface SearchState {
    where: WhereState;
    when: WhenState;
    who: WhoState;
    lastSubmittedAt?: string
}

const initialState: SearchState = {
    where: {},
    when: {},
    who: { adults: 0, children: 0, infants: 0, pets: 0 },
    lastSubmittedAt: undefined
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setWhere(state, action: PayloadAction<WhereState>) {
            state.where = action.payload;
        },
        setWhen(state, action: PayloadAction<WhenState>) {
            state.when = action.payload;
        },
        increment(state, action: PayloadAction<'adults' | 'children' | 'infants' | 'pets'>) {
            const typeGuest = action.payload;
            if (typeGuest !== 'adults' && state.who.adults === 0) {
                state.who.adults++
            }
            state.who[typeGuest]++;
        },
        decrement(state, action: PayloadAction<'adults' | 'children' | 'infants' | 'pets'>) {
            const typeGuest = action.payload;
            if (state.who[typeGuest] > 0) {
                state.who[typeGuest]--;
            }
        },

        resetSearch(state) {
            state.where = {};
            state.when = {};
            state.who = { adults: 0, children: 0, infants: 0, pets: 0 };
            state.lastSubmittedAt = undefined;
        },
        submitSearch(state) {
            state.lastSubmittedAt = new Date().toISOString();
        },

    },
})

export const { setWhere, setWhen, increment, decrement, resetSearch, submitSearch } = searchSlice.actions;

export default searchSlice.reducer;