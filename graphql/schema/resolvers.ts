import prisma from "@/lib/db"
import { createGraphQLError } from "graphql-yoga"

export type Product = {
    id?: number,
    title?: string,
    price?: number,
    image?: string
}

export type User = {
    id?: number,
    email?: string,
    username?: string,
    password?: string,
    name?: string,
    pfp?: string,
}

export const resolvers = {
    Query: {
        products: () => prisma.product.findMany({}),
        productById: (_: unknown, { id }: Product) => prisma.product.findFirst({ where: { id } })
    },
    Mutation: {
        createProduct: async (_: unknown, { title, price, image }: Product ) => {
            if (!title || !price || !image) return
            return prisma.product.create({
                data: { title, price, image }
            })

        },
        deleteProduct: (_: unknown, { id }: Product) => prisma.product.delete({ where: { id } }),
        updateProduct: (_: unknown, { id, title, image, price }: Product) => {
            if (!title && !image && !price) return createGraphQLError("Need atleast 1 property to update")
            return prisma.product.update({
                where: { id },
                data: {
                    ...(title && { title }),
                    ...(image && { image }),
                    ...(price && { price }),
                }
            })
        }
    }
}