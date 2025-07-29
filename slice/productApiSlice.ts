import apiSlice from "./apiSlice";
import { query } from '../lib/graphql'
import { Product, GraphQLResponse, ProductsResponse, ProductsByCategoryResponse } from "@/lib/types";
import { createEntityAdapter, EntityState } from "@reduxjs/toolkit";

const productsAdapter = createEntityAdapter<Product, number>({
    selectId: (product) => product.id
})

const initialState = productsAdapter.getInitialState()

const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllProducts: builder.query<EntityState<Product, number>, void>({
            query: () => ({
                url: '/api/graphql',
                method: 'POST',
                body: {
                    query: query.products,
                }
            }),
            transformResponse: (responseData: GraphQLResponse<ProductsResponse>) => {
                if (!responseData.data?.products) {
                    throw new Error("Failed to fetch products");
                }
                return productsAdapter.setAll(initialState, responseData.data.products)
            }
        }),
        getProductsByCategory: builder.query<EntityState<Product, number>, { category: string }>({
            query: ({ category }) => ({
                url: '/api/graphql',
                method: 'POST',
                body: {
                    query: query.productsByCategory,
                    variables: { category }
                }
            }),
            transformResponse: (responseData: GraphQLResponse<ProductsByCategoryResponse>) => {
                if (!responseData.data?.productsByCategory) {
                    console.error('GraphQL response error:', responseData);
                    throw new Error("Failed to fetch products by category");
                }
                return productsAdapter.setAll(initialState, responseData.data.productsByCategory)
            }
        })
    })
})

export const { useGetAllProductsQuery, useGetProductsByCategoryQuery } = productsApiSlice

export default productsApiSlice