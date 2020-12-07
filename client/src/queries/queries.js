import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;

const getSingleBookQuery = gql`
    query($id: String){
      book(id: $id){
        id
        name
        genre
        author{
          id
          name
          age
        }
      }
    }
`;

const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorId: ID!) {
      addBook(name: $name, genre: $genre, authorId: $authorId){
        name
        id
      }
    }
`;


export { getAuthorsQuery, getBooksQuery, getSingleBookQuery, addBookMutation };