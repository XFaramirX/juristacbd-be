import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    products: [Product!]!
  }

  type Product {
    id: ID!
    title: String!
  }

  type Query {
    users: [User!]!
  }
`;

export default typeDefs;
