import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import SupplementsListService from "../../api/requests/SupplementsListService"

const initialState = {
    supplements: [],
    isLoading: false,
    message: '',
    isSuccess: false,
    isError: false,
}

// Get SupplementsList
export const getSupplementsList = createAsyncThunk(
    'supplements/SupplementsList',
    async (_, thunkAPI) => {
        try {
            return await SupplementsListService.GetSupplementsList()
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)


export const supplementsSlice = createSlice({
    name: 'supplements',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(getSupplementsList.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getSupplementsList.fulfilled, (state, action) => {
                state.isLoading = false
                state.supplements = action.payload
            })
            .addCase(getSupplementsList.rejected, (state, action) => {
                state.isLoading = false
                state.message = action.payload
            })
    },
})

export const {reset, falseIsSuccess} = supplementsSlice.actions
export default supplementsSlice.reducer