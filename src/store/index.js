import {configureStore} from '@reduxjs/toolkit'
import supplementsListReduser from "./slices/SupplementsListSlice"

export default configureStore({
    reducer: {
        supplements: supplementsListReduser
    },
})