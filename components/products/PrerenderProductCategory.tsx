'use client'
import { useAppStore } from '@/lib/storeHooks'
import productsApiSlice from '@/slice/productApiSlice'
import { useEffect } from 'react'

const PrerenderProducCategory = () => {
    const store = useAppStore()

    useEffect(() => {
        store.dispatch(productsApiSlice.util.prefetch('getProductsByCategory', { category: 'bags' }, {  }))
        store.dispatch(productsApiSlice.util.prefetch('getProductsByCategory', { category: 'drinkware' }, {  }))
        store.dispatch(productsApiSlice.util.prefetch('getProductsByCategory', { category: 'electronics' }, {  }))
        store.dispatch(productsApiSlice.util.prefetch('getProductsByCategory', { category: 'footwear' }, {  }))
        store.dispatch(productsApiSlice.util.prefetch('getProductsByCategory', { category: 'headwear' }, {  }))
        store.dispatch(productsApiSlice.util.prefetch('getProductsByCategory', { category: 'hoodies' }, {  }))
        store.dispatch(productsApiSlice.util.prefetch('getProductsByCategory', { category: 'jackets' }, {  }))
        store.dispatch(productsApiSlice.util.prefetch('getProductsByCategory', { category: 'kids' }, {  }))
        store.dispatch(productsApiSlice.util.prefetch('getProductsByCategory', { category: 'pets' }, {  }))
        store.dispatch(productsApiSlice.util.prefetch('getProductsByCategory', { category: 'shirts' }, {  }))
        store.dispatch(productsApiSlice.util.prefetch('getProductsByCategory', { category: 'stickers' }, {  }))
    }, [])

    return null
}

export default PrerenderProducCategory