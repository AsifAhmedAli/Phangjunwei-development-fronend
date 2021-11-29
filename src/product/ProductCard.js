import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Heart, HeartFill, Truck } from 'react-bootstrap-icons';
import sample_prod_img from '../images/prod_img.png';
import { useState } from "react";
import ProductDetails from "./ProductDetails";
import { CloseButton, Modal } from "react-bootstrap";
import axios from 'axios';
import { Link } from "react-router-dom";

function ProductCard({ popularTag, isWishlist, productName, productPrice, productCompany, productExtraInfo, productDetails }) {

    const AddToWishlist = () => {
        console.log(productDetails);
        axios.post('http://localhost:4000/graphql', {
            query: `
            mutation AddToWishlistMutation($id: Int!, $productId: Int!) {
                addToWishlist(userId: $id, productId: $productId) {
                  id
                  role
                  email
                  name
                }
            }
        `,
            variables: {
                id: 3, // User's id hardcoded for now
                productId: productDetails?.id,
            }
        })
    }

    const [quickView, SetQuickView] = useState(false)
    return (
        <>
            <div className="card RecentView-card">
                {popularTag === '' ? '' : <div className="popular-tag" Style={"font-size: 0.75rem"} >{popularTag}</div>}
                <div className="card-wishlist">
                    <button style={{ border: "none", background: "none" }} onClick={() => {
                        //Add to wishlist
                        AddToWishlist()
                    }}>
                        {isWishlist ? <HeartFill className="heart-simbol" color="#FF8200" /> : <Heart className="heart-simbol" color="#FF8200" />}
                    </button>
                </div>
                <div className={"card-product-hoverable"}>
                    <Link to={"/product-details/test"} smooth={true} duration={10000}>
                        <div className={"card-product-img"}><img src={sample_prod_img} alt="" /></div>
                        <div className='under-the-image text-to-center'>
                            <div className="name text-center-title " style={{ fontSize: '0.875rem', color: 'black' }}>{productName}</div>
                            <div className="tags text-center-title">
                                <Link to={"/category/cat"} Style={"font-size: 0.5625rem"}>{productCompany}</Link>
                                <Link to={"/category/catB"} Style={"font-size: 0.5625rem"}>{productExtraInfo}</Link>
                            </div>
                            <Row className="mt-1 m-0">
                                <Col className="price text-center-title p-0"
                                    Style={"color: #FF901E;font-size:0.875rem;font-weight: 400;padding-top: 10px;"}>{productPrice}</Col>
                            </Row>
                            <Row className="mt-0 m-0">
                                <Col className="price text-center-title p-0"
                                    Style={"font-size:0.5625rem;font-weight: 400;"}>
                                    <Truck size={14} style={{ color: 'black' }} className={"mb-1 mr-2"} /> <span style={{ color: 'black' }}>Ships in 2 days</span>
                                </Col>
                            </Row>
                            <div className="d-flex justify-content-center align-items-center mt-1">
                                <div className={"card-product-img-sm"} onClick={() => alert("Hi. I'm clickable")}>
                                    <img src={sample_prod_img} alt="" className="card-small-img" /></div>
                                <div className={"card-product-img-sm"} onClick={() => alert("Hi. I'm clickable")}>
                                    <img src={sample_prod_img} alt="" /></div>
                                <div className={"card-product-img-sm"} onClick={() => alert("Hi. I'm clickable")}>
                                    <img src={sample_prod_img} alt="" /></div>
                            </div>
                        </div>
                    </Link>
                    <div className="overlay">
                        <div>
                            <button className={"blur-button"} onClick={() => SetQuickView(!quickView)}>Quick View</button>
                            <button className={"blur-button"}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal centered size="lg" show={quickView} Style={"max-width:970px;border-radius:23px"}>
                <div className={"float-right px-3 py-2"}><CloseButton onClick={() => SetQuickView(!quickView)} /></div>
                <ProductDetails fromModal productDetails={productDetails} />
            </Modal>

        </>
    );
}

export default ProductCard;
