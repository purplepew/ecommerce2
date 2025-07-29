'use client'
import { Box, Skeleton } from '@mui/material'
import React from 'react'
import { useParams } from 'next/navigation'
import { useGetProductsByCategoryQuery } from '@/slice/productApiSlice'
import { notFound } from 'next/navigation'
import { ProductCard } from '@/components/products/ProductCard'

const page = () => {
    const { collection } = useParams()

    if (!collection || typeof collection !== 'string') {
        return notFound()
    }

    const { data, isLoading, error } = useGetProductsByCategoryQuery({ category: collection.toString() })

    let content

    if (error) {
        // You can customize this UI or log error details
        content = (
            <Box sx={{ p: 4, textAlign: 'center' }}>

                <h2>Error loading products</h2>
                <p>{'message' in error ? error.message : 'An unknown error occurred.'}</p>
            </Box>
        )
    } else if (isLoading) {
        content = (
            <>
                <Skeleton height={'300px'} width={'200px'} />
                <Skeleton height={'300px'} width={'200px'} />
            </>
        )
    } else {
        const products = data?.ids.map(id => {
            const product = data.entities[id]
            return product
        })

        content = (
            <>
                {products?.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        category={product.category}
                    />
                ))}
            </>
        )
    }



    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
                gap: 1
            }}
        >
            {content}
        </Box>
    )
}

export default page