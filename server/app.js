/** @format */


import express from "express";
import { graphqlHTTP } from 'express-graphql';
const app = express();

app.use('/graphql', graphqlHTTP({

}));

app.listen(4000, () => {
  console.log("Listening for request on port 4000");
});
