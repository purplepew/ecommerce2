import { Prisma } from "../app/generated/prisma";

export type Product = Prisma.ProductGetPayload<{}>;
export type CreateProductInput = Prisma.ProductCreateInput;
export type UpdateProductInput = Prisma.ProductUpdateInput;
export type User = Prisma.UserGetPayload<{}>;

// GraphQL specific types
export interface GraphQLResponse<T> {
  data: T,
  errors: { message: string }[]
}

export interface ProductsResponse {
  products: Product[];
}

export interface ProductsByCategoryResponse {
  productsByCategory: Product[],
} 