import { configureStore } from '@reduxjs/toolkit'
import apiSlice from '@/slice/apiSlice'

// public ENVs
if (!process.env.NEXT_PUBLIC_BASE_URL) throw Error("NEXT_PUBLIC_BASE_URL is missing in the .env")

const makeStore = () => {
    return configureStore({
        reducer: {
            [apiSlice.reducerPath]: apiSlice.reducer
        },
        middleware: defaultMiddleware => {
            return defaultMiddleware().concat(apiSlice.middleware)
        }
    })
}

export default makeStore

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
