import { createSlice } from "@reduxjs/toolkit";

const LCS_KEY = "lsf";

const initialState = {
    favorites: JSON.parse(localStorage.getItem(LCS_KEY) ?? "[]"),
};

export const gitHubFavSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorites: (state, action) => {
            state.favorites.push(action.payload);
            localStorage.setItem(LCS_KEY, JSON.stringify(state.favorites));
        },
        removeFavorites: (state, action) => {
            state.favorites = state.favorites.filter(
                (f) => f !== action.payload
            );
            localStorage.setItem(LCS_KEY, JSON.stringify(state.favorites));
        },
    },
});

export const githubActions = gitHubFavSlice.actions;
export const githubReducers = gitHubFavSlice.reducer;
