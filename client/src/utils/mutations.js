import {gql} from 'apollo/client';

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!){
    login(email: $email, password: $password) {
        token
        user{
            id
            username

        }
    }
}`

export const ADD_USER = gql`
mutation addUser($username: String!,$email: String!, password: String!){
    token
    user{
        id
        username
    }
}`
//input bookdata => all arguments 
// output user 
export const SAVE_BOOK = gql`
mutation saveBook($bookData: BookInput!, $username: String!, $email: String!)
user(bookdata: $bookData, username: $username, email: $email)
savedBooks{
    title
    author
}
`

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID! ){
    removeBook(bookId: $bookId) {
        _id
        
    }
}
`