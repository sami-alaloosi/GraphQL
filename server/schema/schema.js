/** @format */
import graphql from "graphql";
import Book from "../models/book.js";
import Author from "../models/author.js";
import _ from "lodash";
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;


// //dummy data
// import { books, authors } from "./dummy.js";

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author:{
      type: AuthorType,
      resolve(parent, args){
      //  return  _.find(authors,{id: parent.authorId})
      }
    }
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books:{
      type: new GraphQLList(BookType),
      resolve(pareant, args){
        // return _.filter(books, {authorId: pareant.id})
      }
    }
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db / other sources
        // return _.find(books, { id: args.id });
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return _.find(authors, { id: args.id });
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args){
        return books
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args){
        return authors
      }
    }
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
