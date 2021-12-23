import { gql } from '@apollo/client';

const GET_USERS = gql`
query AllUser($size: Int, $offset: Int) {
  allUser(size: $size, offset: $offset) {
    content {
      id
      name
      email
      role
    }
    totalPages
  }
}`


const GET_USER = gql`
query getUser{
    getUser(id: $id){
        id
        name
        email
    }
}`

const GET_MERCHANTS = gql`
query allMerchants($size: Int, $offset: Int){
    allMerchants(size: $size, offset: $offset) {
        content {
            id
            name
            address
            contact
            email
            
            
        }
        totalPages
    }
}`

const GET_MERCHANT = gql`
    query getMerchant($id: Int!) {
        getMerchant(id: $id){
            id
            name
            address
            contact
            email
            password
            blocked
            role
        }
    }
`

const GET_PRODUCTS = gql`
    query AllProducts($size: Int, $offset: Int) {
        allProducts(size: $size, offset: $offset) {
            totalPages
            content {
                skuName
                skuCompany
                skuTag
                skuCategory
                skuStyle
                skuColor
                skuprice
                type
                parentId
                promoPrice
                inWishlist
                stockQty
                disabled
            }
        }
    }
`

const GET_PARENT_PRODUCTS = gql`
    query parentProducts($type: String!, $merchantId: Int!) {
        parentProducts(type: $type, merchantId: $merchantId) {
            id
            skuName
            skuTag
            skuCompany
            skuCategory
            skuStyle
            skuColor
            skuprice
            type
            promoPrice
            inWishlist
            disabled
            stockQty
            merchant {
                id
                email
            }
        }
    }
`

const GET_PRODUCT = gql`
    query GetProduct($getProductId: Int!) {
        getProduct(id: $getProductId) {
            id
            skuName
            skuTag
            skuCompany
            skuCategory
            skuStyle
            skuColor
            skuprice
            type
            parentId
            promoPrice
            inWishlist
            disabled
            stockQty
            merchant {
                id
                name
                email
            }
        }
    }
`

const GET_MERCHANT_PRODUCTS = gql`
    query getMerchantProducts($id: Int!,  $size: Int, $offset: Int){
        merchantProducts(merchantId: $merchantId, size: $size, offset: $offset) {
            content {
                id
                skuName
                skuCompany
                skuTag
                skuCategory
                skuStyle
                skuColor
                skuprice
                type
                parentId
                promoPrice
                inWishlist
                disabled
                stockQty
            }
            totalPages
        }
    }
`

const GET_MERCHANT_PRODUCTS_STYLES = gql`
    query getMerchantProductsStyles($id: Int!){
        merchantProducts(merchantId: $id) {
            id
            skuStyle
          }
    }
`

const GET_MERCHANT_PRODUCTS_CATEGORIES = gql`
    query getMerchantProductsAndImages($id: Int!){
        merchantProducts(id: $id) {
            skuCategory
        }
    }
`


const GET_CART_BY_USER = gql`
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

const GET_CART = gql`
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

const GET_ORDERS = gql`
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

const GET_ORDER = gql`
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
const MERCHANT_ORDERS = gql`
    query MerchantOrders($merchantOrdersId: Int!) {
        merchantOrders(id: $merchantOrdersId) {
            OrderId
            ProductId
            MerchantId
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
            paymentInfo
            paymentStatus
            status
        }
    }
`

const MERCHANT_IMAGES = gql`
    query MerchantImages($merchantId: Int!) {
        merchantImages(id: $merchantId) {
            collectionImg
            bannerImg
        }
    }
`

const PRODUCT_IMAGES = gql`
    query ProductImages($productImagesId: Int!) {
        productImages(id: $productImagesId) {
            mainImage
        }
    }
`

const GET_ORDER_BY_USER = gql`
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


const GET_USER_WISHLIST = gql`
    query getUserWishlist($id: Int!) {
        getUser(id: $id) {
            wishlists {
              id
              product {
                id
                skuName
                skuColor
                skuCompany
                skuTag
                skuPrice
                inWishlist
                promoPrice
              }
            }
        }
    }
`

const USER_ORDERS = gql`
    query GetUserOrders($userId: Int!) {
        getUserOrders(id: $userId) {
            OrderId
            ProductId
            MerchantId
            clientFirstName
            clientEmail
            clientLastName
        }
    }
`
const GET_USER_ORDER_WITH_STATUS = gql`
    query GetUserInfo($userId: Int!) {
        getUserInfo(id: $userId) {
            totalOrders
            pendingOrders
            user {
                id
                name
                email
                role
            }
        }
    }
`

export {
    GET_USERS,
    GET_USER,
    GET_MERCHANTS,
    GET_MERCHANT,
    GET_PRODUCTS,
    GET_MERCHANT_PRODUCTS,
    GET_MERCHANT_PRODUCTS_CATEGORIES,
    GET_MERCHANT_PRODUCTS_STYLES,
    GET_CART_BY_USER,
    GET_USER_WISHLIST,
    GET_CART,
    GET_ORDERS,
    GET_ORDER,
    GET_ORDER_BY_USER,
    MERCHANT_ORDERS,
    MERCHANT_IMAGES,
    GET_PRODUCT,
    PRODUCT_IMAGES,
    GET_PARENT_PRODUCTS,
    USER_ORDERS,
    GET_USER_ORDER_WITH_STATUS
};