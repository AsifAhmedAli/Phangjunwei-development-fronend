import { gql } from '@apollo/client';

const GET_USERS = gql
    `
        query allUser {
                allUser {
                    id
                    name
                    email
                }
            }
    `;


const GET_USER = gql
    `
query getUser{
    getUser(id: $id){
        id
        name
        email
    }
}`

const GET_MERCHANTS = gql
    `query allMerchants{
  allMerchants{
        id
        name
        description
        address1
        contact1
        contact2
        email
        tier
    }
}`

const GET_MERCHANT_COMPLETE = gql
    `query allMerchants{
  allMerchants{
        id
        name
        description
        address1
        contact1
        contact2
        email
        tier
        products{
                id
                skuId
                skuName
                skuPrice1
                skuPrice2
                skuPrice4
                srpPrice
                promoPrice
                stockQty
                orderDetails{
                            qty
                            clientContactInfo
                            order{
                                    clientFirstName
                                    clientLastName
                                    clientEmail
                                    clientContactInfo
                                    deliveryOption
                                    }
                            product{
                                    skuId
                                }
                            }
                cartDetails{
                            qty
                            clientContactInfo
                            cart{
                                    clientFirstName
                                    clientLastName
                                }
                            }
                    }
    }
}`


const GET_MERCHANT = gql
    `
        query getMerchant($id: Int!) {
            getMerchant(id: $id){
                id
                address1
                email
                name
            }
        }
    `

const GET_PRODUCTS = gql
    `
        query allProducts{
            allProducts{
                id
                skuName
                skuId
                skuColor
                skuCompany
                skuTag
                skuPrice1
                skuPrice2
                promoPrice
                srpPrice
                skuPrice4
                skuPrice3
        }
    }
`
const GET_MERCHANT_PRODUCTS = gql
    `
    query getMerchantProducts($id: Int!){
        merchantProducts(merchantId: $id) {
            id
            skuId
            skuColor
            skuStyle
            skuCategory
            skuCompany
            skuTag
            skuName
            skuPrice3
            skuPrice2
            skuPrice1
            srpPrice
            promoPrice
          }
    }
`

const GET_MERCHANT_PRODUCTS_STYLES = gql
    `
    query getMerchantProductsStyles($id: Int!){
        merchantProducts(merchantId: $id) {
            id
            skuId
            skuStyle
          }
    }
`

const GET_MERCHANT_PRODUCTS_WITH_IMAGES = gql
    `
    query getMerchantProductsAndImages($id: Int!){
        getMerchant(id: $id) {
            merchantAdImages
            merchantMoodshotImages
            merchantProductImages
            products {
                id
                skuId
                skuColor
                skuStyle
                skuCategory
                skuCompany
                skuTag
                skuName
                skuPrice3
                skuPrice2
                skuPrice1
                srpPrice
                promoPrice
            }
          }
    }
`

const GET_MERCHANT_PRODUCTS_CATEGORIES = gql
    `
    query getMerchantProductsAndImages($id: Int!){
        merchantProducts(id: $id) {
            skuCategory
        }
    }
`


const GET_CART_BY_USER = gql
    `
        query getCartByUser($userId: Int!){
            getCartByUser(id: $userId){
                clientFirstName
                clientEmail
                clientLastName
                deliveryOption
                refCode
                subTotal
                deliveryFee
        }
    }
`

const GET_CART = gql
    `
    query getCart($id: Int!){
        getCart(id: $getCartId) {
            clientFirstName
            clientLastName
            subTotal
            deliveryFee
            deliveryOption
            refCode
            clientContactInfo
            clientEmail
            status
            paymentInfo
            paymentStatus
            billingAddress
            deliveryAddress
            promoCodeValue
            promoCode
            details {
                qty
                cart {
                    clientFirstName
                    clientLastName
                    clientEmail
                    clientContactInfo
                }
                clientContactInfo
            }
          }
    }
`

const GET_ORDERS = gql
    `
    query getOrders{
        getOrders{
            clientEmail
            clientFirstName
            clientLastName
            deliveryOption
            refCode
            clientContactInfo
            subTotal
            deliveryFee
            status
            paymentInfo
            paymentStatus
            billingAddress
            deliveryAddress
            promoCodeValue
            promoCode
        }
    }
`

const GET_ORDER = gql
    `
    query Query($id: Int!) {
        getOrder(id: $id) {
            clientFirstName
            clientLastName
            clientEmail
            clientContactInfo
            refCode
            deliveryOption
            deliveryFee
            subTotal
            promoCode
            promoCodeValue
            deliveryAddress
            billingAddress
            paymentStatus
            paymentInfo
            status
        }
    }
`

const GET_ORDER_BY_USER = gql
    `
    query Query($userId: Int!) {
        getOrdersByUser(id: $userId) {
        clientFirstName
        clientLastName
        clientEmail
        clientContactInfo
        refCode
        deliveryOption
        deliveryFee
        subTotal
        promoCode
        promoCodeValue
        deliveryAddress
        billingAddress
        paymentStatus
        paymentInfo
        status
        }
    }
`


const GET_USER_WISHLIST = gql
    `
    query getUserWishlist($id: Int!) {
        getUser(id: $id) {
            wishlists {
              id
              description
              product {
                id
                skuName
                skuId
                skuColor
                skuCompany
                skuTag
                inWishlist
                skuPrice1
                skuPrice2
                promoPrice
                srpPrice
                skuPrice4
                skuPrice3
              }
            }
        }
    }
`


export {
    GET_USERS,
    GET_USER,
    GET_MERCHANTS,
    GET_MERCHANT,
    GET_MERCHANT_COMPLETE,
    GET_PRODUCTS,
    GET_MERCHANT_PRODUCTS,
    GET_MERCHANT_PRODUCTS_WITH_IMAGES,
    GET_MERCHANT_PRODUCTS_CATEGORIES,
    GET_MERCHANT_PRODUCTS_STYLES,
    GET_CART_BY_USER,
    GET_USER_WISHLIST,
    GET_CART,
    GET_ORDERS,
    GET_ORDER,
    GET_ORDER_BY_USER
};