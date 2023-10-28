import { createSlice } from "@reduxjs/toolkit";
import GptSearch from "../components/GptSearch";

const gptSlice = createSlice (
    {
        name : "gpt",
        initialState : {
            showGptSearch : false,

        },

        reducers: {
            toggleGptSearchView :(state , action) => {
                state.showGptSearch = !state.showGptSearch
            }
        }
    }
)

export const {toggleGptSearchView} = gptSlice.actions;
export default gptSlice.reducer;