import { createSlice } from '@reduxjs/toolkit';

const feedSlice = createSlice({
    name: 'feed',
    initialState: [],
    reducers: {
        addFeed: (state, action) => {
            return action.payload;
        },
        removeUserFeed: (state, action) => {
            return state.filter((user) => user._id !== action.payload);
        },
        updateFeed: (state, action) => {
            // Complete replacement of feed data
            return action.payload;
        }
    },
});

export const { addFeed, removeUserFeed, updateFeed } = feedSlice.actions;
export default feedSlice.reducer;