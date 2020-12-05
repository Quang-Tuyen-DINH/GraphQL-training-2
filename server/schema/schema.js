const graphql = require('graphql');
const _ = require("lodash");
const Book = require('../models/book');
const Author = require('../models/author');

const { 
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull 
} = graphql;

const bookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: authorType,
      resolve: (parent, args) => {
        //return _.find(authors, { id: parent.authorId })
      }
    }
  })
});

const authorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(bookType),
      resolve: (parent, args) => {
        //return _.find(books, { id: parent.id })
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: { 
      type: bookType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        //return _.find(books, { id: args.id });
      }
    },
    author: {
      type: authorType,
      args: { id: { type: GraphQLID }},
      resolve: (parent, args) => {
        return _.find(authors, { id: args.id })
      }
    },
    books: {
      type: new GraphQLList(bookType),
      resolve(parent, args) {
        //return books;
      }
    },
    authors: {
      type: new GraphQLList(authorType),
      resolve(parent, args) {
        //return authors;
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addAuthor: {
      type: authorType,
      args: {
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
      },
      resolve: (parent, args) => {
        let author = new Author({
          name: args.name,
          age: args.age
        });
        return author.save();
      }
    }
  })
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});