import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Heart, HeartFill, Plus, Truck} from 'react-bootstrap-icons';
import sample_prod_img from '../images/prod_img.png';
import Button from 'react-bootstrap/Button';
import {useEffect, useState} from "react";
import ProductDetails from "./ProductDetails";
import {CloseButton, Modal} from "react-bootstrap";
import {Link} from "react-router-dom";
import ModalHeader from "react-bootstrap/ModalHeader";

function ProductCard({ popularTag, isWishlist, productName, productPrice, productCompany, productExtraInfo }) {
    const [inWishlist, addToWishlist] = useState(isWishlist)
    const [quickView,SetQuickView] = useState(false)
    return (
        <>
            <Link to={"/product-details/test"} className="card">
                {popularTag === '' ? '' : <div className="popular-tag">{popularTag}</div>}
                <div className="card-wishlist">
                    <button style={{border: "none", background: "none"}} onClick={()=>{
                        //Add your server/ API logic here
                        addToWishlist(!inWishlist)
                        console.log("toggle wishlist.", inWishlist)
                    }}>
                        {inWishlist ? <HeartFill size={18} color="#FF8200" /> : <Heart size={18} color="#FF8200" />}
                    </button>
                </div>
                <div className={"card-product-hoverable"}>
                    <div className={"card-product-img"} ><img src={sample_prod_img} alt=""/></div>
                    <div className="name text-center" Style={"font-size: 22px"}>{productName}</div>
                    <div className="tags text-center">
                        <Link to={"/category/cat"}>{productCompany}</Link>
                        <Link to={"/category/catB"}>{productExtraInfo}</Link>
                    </div>
                    <Row className="mt-1 m-0">
                        <Col className="price text-center p-0" Style={"color: #FF901E;font-size:20px;font-weight: 400;padding-top: 10px;"}>{productPrice}</Col>
                    </Row>
                    <Row className="mt-0 m-0">
                        <Col className="price text-center p-0" Style={"font-size:12px;font-weight: 400;"}>
                            <Truck size={14} className={"mb-1 mr-2"}/> <span>Ships in 2 days</span>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-center align-items-center mt-2">
                        <div className={"card-product-img-sm"} onClick={()=>alert("Hi. I'm clickable")}>
                            <img src={sample_prod_img} alt=""/></div>
                        <div className={"card-product-img-sm"} onClick={()=>alert("Hi. I'm clickable")}>
                            <img src={sample_prod_img} alt=""/></div>
                        <div className={"card-product-img-sm"} onClick={()=>alert("Hi. I'm clickable")}>
                            <img src={sample_prod_img} alt=""/></div>
                    </div>

                    <div className="overlay">
                        <div>
                            <button className={"blur-button"} onClick={()=>SetQuickView(!quickView)}>Quick View</button>
                            <button className={"blur-button"}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </Link>
            <Modal centered size="lg" show={quickView} Style={"max-width:970px;border-radius:23px"}>
                <div className={"float-right px-3 py-2"}><CloseButton onClick={()=>SetQuickView(!quickView)}/></div>
                <ProductDetails fromModal/>
            </Modal>

        </>
    );
}

export default ProductCard;