/** @format */

import graphql from "graphql";
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;
import _ from "lodash"
// dummy data
const books = [
    {id: '1', name: 'cracking the coding interview', genre: "Programming" },
    {id: '2', name: 'Designing Data-Intensive Applications', genre: "Programming" },
    {id: '3', name: 'The 48 Laws of Power', genre: "Self-help book" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book:{
            type: BookType,
            args:{id:{type:GraphQLString}},
            resolve(parent, args){
                // code to get data from db / other sources
              return _.find(books, { id: args.id });
            }
        }
    }

})


export default new GraphQLSchema({
    query: RootQuery
})

