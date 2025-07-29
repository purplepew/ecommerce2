export const typeDefs = `
 type Product {
    id: Int!
    title: String!
    price: Float!
    image: String!
    category: String
 }

 type User {
    id: Int!
    email: String!
    username: String
    password: String
    name: String
    pfp: String
 }

 input CreateProductInput {
    title: String!
    price: Float!
    image: String!
    category: String
 }

 input UpdateProductInput {
    title: String
    price: Float
    image: String
    category: String
 }

 type Query {
   products: [Product]
   productById(id: Int!): Product 
   productsByCategory(category: String!): [Product]!
 }  

 type Mutation {
   createProduct(input: CreateProductInput!): Product
   deleteProduct(id: Int!): Product
   updateProduct(id: Int!, input: UpdateProductInput!): Product
 }
`