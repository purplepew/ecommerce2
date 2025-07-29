import prisma  from "@/lib/db";
import { createGraphQLError  } from "graphql-yoga";

export const resolvers = {
  Query: {
    products: async () => {
      try {
        return await prisma.product.findMany({
          orderBy: { price: 'asc' }
        });
      } catch (error) {
        throw createGraphQLError('Failed to fetch products', {
          extensions: { code: 'INTERNAL_SERVER_ERROR' }
        });
      }
    },

    productById: async (_: unknown, { id }: { id: number }) => {
      try {
        const product = await prisma.product.findUnique({
          where: { id }
        });
        
        if (!product) {
          throw createGraphQLError('Product not found', {
            extensions: { code: 'NOT_FOUND' }
          });
        }
        
        return product;
      } catch (error) {
        if (error instanceof Error && error.message === 'Product not found') {
          throw error;
        }
        throw createGraphQLError('Failed to fetch product', {
          extensions: { code: 'INTERNAL_SERVER_ERROR' }
        });
      }
    },

    productsByCategory: async (_: unknown, { category }: { category: string }) => {
      try {
        return await prisma.product.findMany({
          where: { category }
        })
      } catch (error) {
        throw createGraphQLError(`Failed to fetch products by category. CATEGORY: ${category}`, {
          extensions: { code: 'INTERNAL_SERVER_ERROR' }
        });
      }
    }
  },

  Mutation: {
    createProduct: async (_: unknown, { input }: { input: any }) => {
      try {
        const { title, price, image, category } = input;
        
        if (!title || !price || !image) {
          throw createGraphQLError('Missing required fields', {
            extensions: { code: 'BAD_REQUEST' }
          });
        }

        return await prisma.product.create({
          data: { title, price, image, category }
        });
      } catch (error) {
        if (error instanceof Error && error.message === 'Missing required fields') {
          throw error;
        }
        throw createGraphQLError('Failed to create product', {
          extensions: { code: 'INTERNAL_SERVER_ERROR' }
        });
      }
    },

    updateProduct: async (_: unknown, { id, input }: { id: number; input: any }) => {
      try {
        const { title, price, image, category } = input;
        
        if (!title && !price && !image && !category) {
          throw createGraphQLError('At least one field must be provided', {
            extensions: { code: 'BAD_REQUEST' }
          });
        }

        const updateData: any = {};
        if (title) updateData.title = title;
        if (price) updateData.price = price;
        if (image) updateData.image = image;
        if (category) updateData.category = category;

        return await prisma.product.update({
          where: { id },
          data: updateData
        });
      } catch (error) {
        if (error instanceof Error && error.message === 'At least one field must be provided') {
          throw error;
        }
        throw createGraphQLError('Failed to update product', {
          extensions: { code: 'INTERNAL_SERVER_ERROR' }
        });
      }
    },

    deleteProduct: async (_: unknown, { id }: { id: number }) => {
      try {
        return await prisma.product.delete({
          where: { id }
        });
      } catch (error) {
        throw createGraphQLError('Failed to delete product', {
          extensions: { code: 'INTERNAL_SERVER_ERROR' }
        });
      }
    }
  }
};