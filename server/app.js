const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://user1:user1password@gql-ninja.mjgfr.mongodb.net/gql-ninja?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
  console.log('connected to gql-ninja')
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(3000, () => {
  console.log('Server running')
})