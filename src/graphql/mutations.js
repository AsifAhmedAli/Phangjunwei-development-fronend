import { gql } from '@apollo/client';

const CREATE_USER = gql`
mutation Register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
    name
    email  
    }
  }    
`

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

const LOGOUT = gql`
    mutation Logout {
        logout {
            message
        }
    }
`

const MAKE_ADMIN = gql`
    mutation MakeAdmin($email: String!) {
        makeAdmin(email: $email) {
            id
            name
            email
            role
        }
    }
`

const MERCHANT_LOGIN = gql`
    mutation MerchantLogin($email: String!, $password: String!) {
        merchantLogin(email: $email, password: $password) {
            token
            email
            role
        }
    }
`

const UPDATE_USER = gql`
    mutation UpdateUser($name: String!, $email: String!, $password: String!) {
        updateUser(name: $name, email: $email, password: $password) {
            id
            name
            email
            role
        }
    }
`

const REMOVE_USER = gql`
    mutation RemoveUser($userId: Int!) {
       removeUser(id: $userId)
    }
`

const UPDATE_MERCHANT = gql`
    mutation UpdateMerchant($name: String!, $email: String!, $password: String!, $address: String, $contact: String) {
        updateMerchant(name: $name, email: $email, password: $password, address: $address, contact: $contact) {
            id
            name
            address
            contact
            email
            password
        }
    }
`

const REMOVE_MERCHANT = gql`
    mutation RemoveMerchant($merchantId: Int!) {
        removeMerchant(id: $merchantId) {
            message
        }
    }
`

const BLOCK_MERCHANT = gql`
    mutation BlockMerchant($merchantId: Int!) {
        blockMerchant(id: $merchantId) {
            id
            name
            email
        }
    }
`

const UNBLOCK_MERCHANT = gql`
    mutation UnblockMerchant($merchantId: Int!) {
        unblockMerchant(id: $merchantId) {
            id
            name
            email
        }
    }
`

const REMOVE_PRODUCT = gql`
    mutation RemoveProduct($productId: Int!) {
        removeProduct(id: $productId) {
            message
        }
    }
`

const UPDATE_PRODUCT = gql`
    mutation UpdateProduct(
        $productId: Int!, 
        $skuName: String!, 
        $stockQty: Int!, 
        $skuprice: Float, 
        $disabled: Boolean, 
        $promoPrice: Float
    ) {
    updateProduct(
        id: $productId, 
        skuName: $skuName, 
        stockQty: $stockQty, 
        skuprice: $skuprice, 
        disabled: $disabled, 
        promoPrice: $promoPrice
    )  {
            id
            skuName
            skuTag
            skuCategory
            skuCompany
        }
    }
`

const CLEAR_CART = gql`
    mutation ClearCart($userId: Int!) {
        clearCart(id: $userId) {
            message
        }
    }
    
`

const ADD_TO_CART = gql`
    mutation AddToCart($productId: Int!) {
        addToCart(productId: $productId) {
            message
        }
    }
`

const REMOVE_FROM_CART = gql`
    mutation RemoveFromCart($userId: Int!, $productId: Int!) {
        removeFromCart(id: $userId, productId: $productId) {
            message
        }
    }
`

const ADD_TO_WISHLIST = gql`
    mutation AddToWishlist($userId: Int!, $productId: Int!) {
        addToWishlist(userId: $userId, productId: $productId) {
            name
            email
            id
        }
    }
`

export { CREATE_USER, LOGIN_USER, REFRESH_TOKEN, LOGOUT, MAKE_ADMIN, MERCHANT_LOGIN, UPDATE_USER, REMOVE_USER, UPDATE_MERCHANT, REMOVE_MERCHANT, BLOCK_MERCHANT, UNBLOCK_MERCHANT, REMOVE_PRODUCT, UPDATE_PRODUCT, CLEAR_CART, ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_WISHLIST };