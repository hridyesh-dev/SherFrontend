// we can create this store with the help of configure store method
import {configureStore} from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'

// this will only accept config object parameter
//jo hamari multiple slices ke reducers that we will assign it here
//if it is a single function that we will use it as a root reducer
// and if there are multiple slices then it will work like a combine reducer 
const store=configureStore({
    reducer : {
        // user slice ke sabhi reducers ka access hamare store ke pass aa gaya hai 
        users : userSlice,
    }
})

export default store ;