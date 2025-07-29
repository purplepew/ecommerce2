'use client'
import productsApiSlice from '@/slice/productApiSlice'
import { useEffect } from 'react'
import { useAppStore } from '@/lib/storeHooks'

const PrerenderAllProducts = () => {
    const store = useAppStore()

    useEffect(() => {
        store.dispatch(productsApiSlice.util.prefetch('getAllProducts', undefined, { force: true }))
    }, [])
    return null
}

export default PrerenderAllProducts