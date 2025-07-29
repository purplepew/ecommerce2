'use client'
import { ProductCard, ProductCardSkeleton } from '@/components/products/ProductCard'
import { useGetAllProductsQuery } from '@/slice/productApiSlice'
import { Box } from '@mui/material'
import React from 'react'

const page = () => {
  const { data, isLoading, error } = useGetAllProductsQuery()

  let content

  if (isLoading) {
    content = (
      <>
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </>
    )
  } else if (error) {
    const message = 'message' in error ? error.message : 'An unknown error occured'
    content = <p>{message}</p>
  } else {
    content = (
      <>
        {data && data.ids.map(id => {
          const product = data.entities[id]
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={Number(product.price)}
              image={product.image}
              category={product.category}
            />
          )
        })}
      </>
    )
  }

  return (
    <div>
      <h1>All page</h1>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1
        }}
      >
        {content}
      </Box >
    </div>
  )
}

export default page