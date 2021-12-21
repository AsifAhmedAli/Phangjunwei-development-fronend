import { gql } from '@apollo/client';

const CREATE_USER = gql`
    mutation register{
        register(
            name: $name, 
            email: $email, 
            password: $password
        ){
            name
            email
        }
}`

const LOGIN_USER = gql`
mutation Login ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      email
      role
    }
  }

`
const REFRESH_TOKEN = gql`
mutation GenerateAccessToken {
    generateAccessToken {
    token  
    email
    role
    }
  }

`

const ADD_TO_WISHLIST = gql`
    mutation AddToWishlistMutation($id: Int!, $productId: Int!) {
        addToWishlist(userId: $id, productId: $productId) {
          id
          role
          email
          name
        }
    }
`

const LOGOUT = gql`
    mutation Logout {
        logout {
            message
        }
    }
`

export { CREATE_USER, ADD_TO_WISHLIST, LOGIN_USER, REFRESH_TOKEN, LOGOUT };