import { configureStore } from '@reduxjs/toolkit'
import ServicesReducer from './components/home/servicesCarousel/ServicesSlice'

export const store = configureStore({
    reducer: {
        servicesSlice: ServicesReducer

    }
})

