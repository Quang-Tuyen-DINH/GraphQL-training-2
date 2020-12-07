import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getSingleBookQuery } from "../queries/queries";

class BookDetails extends Component {
  displayBookDetails(){
    const book = this.props.selectedBook;
    console.log(book)
    if(book){
        return(
            <div>
                <h2>{ book.name }</h2>
            </div>
        );
    } else {
        return( <div>No book selected...</div> );
    }
}

  render() {
    return(
        <div id="book-details">
            { this.displayBookDetails() }
        </div>
    );
  }
}

export default graphql(getSingleBookQuery, {
  options: (props) => {
      return {
          variables: {
              id: props.bookId
          }
      }
  }
})(BookDetails);