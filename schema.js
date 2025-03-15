import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    description: String
    price: Float!
    stock: Int!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    orders: [Order!]
  }

  type Order {
    id: ID!
    status: String!
    user: User!
    products: [Product!]
  }

  type Query {
    products: [Product!]
    product(id: ID!): Product
    users: [User!]
    orders: [Order!]
  }

  type Mutation {
    createProduct(
      name: String!
      description: String
      price: Float!
      stock: Int!
    ): Product!
    createUser(username: String!, email: String!): User!
    createOrder(userId: ID!, status: String!, productIds: [ID!]!): Order!
  }
`;
