const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: String!
        authors: [String]
        description: String
        image: String
        link: String
        title: String!
    }

    type Auth {
        token : ID!
        user: User
    }
    
    input BookInput {
        authors: [String]
        description: String!
        bookId: String!
        image: String
        link: String
        title: String!
      }

    type Query {    
        me: User
        users: [User]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookData: BookInput!):User
        removeBook(bookId: String!): Auth
    }
`;

module.exports = typeDefs;