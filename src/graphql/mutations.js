import { gql } from '@apollo/client';

const CREATE_USER = gql
    `
    mutation register{
        register(
            name: $name, 
            email: $email, 
            password: $password, 
            role: $role
        ){
            name
            email
            role
        }
}`

const LOGIN_USER=gql`
mutation Login
($email: String!, $password: String!) 
{
    login(email: $email, password: $password) {
      token
    }
  }

`
const REFRESH_TOKEN=gql`
mutation GenerateAccessToken {
    generateAccessToken {
    token  
    }
  }

`

const CREATE_MERCHANT = gql
    `
    mutation CreateMerchantMutation(
            $name: String!, 
            $createMerchantEmail2: String!, 
            $userId: Int!, 
            $description: String, 
            $address1: String, 
            $contact1: String, 
            $contact2: String, 
            $tier: String
        ) {
        createMerchant(
            name: $name, 
            email: $createMerchantEmail2, 
            userId: $userId, 
            description: $description, 
            address1: $address1, 
            contact1: $contact1, 
            contact2: $contact2, 
            tier: $tier
        ) {
          id
          name
          description
          address1
          contact1
          contact2
          email
        }
      }
`

const CREATE_PRODUCT = gql
    `
        mutation createProduct(
            $skuId: String!, 
            $skuName: String!, 
            $srpPrice: Float!, 
            $stockQty: Int!, 
            $skuPrice1: Float, 
            $skuPrice2: Float, 
            $skuPrice3: Float, 
            $skuPrice4: Float, 
            $promoPrice: Float, 
            $merchantId: Int!
        ) {
            createProduct(
                skuId: $skuId, 
                skuName: $skuName, 
                srpPrice: $srpPrice, 
                stockQty: $stockQty, 
                skuPrice1: $skuPrice1, 
                skuPrice2: $skuPrice2, 
                skuPrice3: $skuPrice3, 
                skuPrice4: $skuPrice4, 
                promoPrice: $promoPrice, 
                merchantId: $merchantId
            ) {
                id
                promoPrice
                skuId
                skuName
                skuPrice1
                stockQty
             }
        }
`

const ADD_TO_WISHLIST = gql
    `
    mutation AddToWishlistMutation($id: Int!, $productId: Int!) {
        addToWishlist(userId: $id, productId: $productId) {
          id
          role
          email
          name
        }
    }
`


export { CREATE_USER, CREATE_MERCHANT, CREATE_PRODUCT, ADD_TO_WISHLIST,LOGIN_USER,REFRESH_TOKEN };