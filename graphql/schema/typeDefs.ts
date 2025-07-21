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

 type Query {
   products: [Product]
   productById(id: Int!): Product
 }

 type Mutation {
   createProduct(title: String!, price: Float!, image: String!): Product
   deleteProduct(id: Int!): Product
   updateProduct(id: Int!, title: String, price: Float, image: String): Product
 }
`