import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

//Apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Book List</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    )
  }
}
