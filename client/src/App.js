import React, { Component } from 'react';
import BookList from "./components/BookList";

export default class App extends Component {
  render() {
    return (
      <div>
        <ui id="book-list">
          <h1>Book List</h1>
          <BookList />
        </ui>
      </div>
    )
  }
}
