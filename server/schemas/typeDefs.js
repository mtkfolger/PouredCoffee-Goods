const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    _id: ID!
    name: String
    description: String! 
    price: Int
    roast: String
    image: String
    stock: Int
  }

  type User {
    _id: ID!
    username: String!
    password: String!
  }

  type Query {
    Product: [Product]
    userNames: [User]
  }
`;

module.exports = typeDefs;
