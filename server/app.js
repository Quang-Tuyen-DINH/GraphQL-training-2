const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//Allow cross-origin requests
app.use(cors());

//Connect mlab database
mongoose.connect('mongodb+srv://user1:user1Password@gql-ninja.mjgfr.mongodb.net/gql-ninja?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
  console.log('connected to gql-ninja')
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.log('Server running on port 4000')
})