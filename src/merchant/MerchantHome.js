import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Collections from './Collections';
import Category from './Category';
import ProductCard_Search from '../product/ProductCard';
import Form from 'react-bootstrap/Form';
import StarRatings from 'react-star-ratings';
import Modal from 'react-bootstrap/Modal';

import sampleLogo from '../images/merchant/1/Image 477.png';
import packaged from '../images/merchant/1/Image 478.png';
import rating from '../images/merchant/1/Image 479.png';
import shipping from '../images/merchant/1/Image 481.png';
import chat from '../images/merchant/1/Image 482.png';
import profile from '../images/merchant/1/Image 480.png';
import follow from '../images/merchant/1/Image 483.png';

import { ArrowLeftCircle, ArrowRightCircle, Heart, HeartFill, Search } from 'react-bootstrap-icons';

function MerchantHome() {
    const [showReview, setShowReview] = useState(false);

    const openReviewSection = (e) => {
        setShowReview(true);
    };

    const closeReviewSection = (e) => {
        setShowReview(false);
    };


    return (
        <>
            <Modal show={showReview} onHide={closeReviewSection} size="md" aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Header closeButton>
                    <Modal.Title className="review-section-title" id="contained-modal-title-vcenter">Customer Reviews (12)</Modal.Title>
                </Modal.Header>
                <Modal.Body className="review-details">
                    <Row>
                        <Col>Customer A&nbsp;&nbsp;-&nbsp;&nbsp;May 01, 2021</Col>
                    </Row>
                    <Row>
                        <Col>
                            <StarRatings
                                rating={4.5}
                                starRatedColor="black"
                                numberOfStars={5}
                                starDimension="11px"
                                starSpacing="3px"
                            />
                        </Col>
                    </Row>
                    <Row className="end-of-review">
                        <Col>
                            Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt tempore sed impedit
                            voluptatibus. Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt. Lorem
                            ipsum dolor sit amet. Qui quod voluptate At deserunt tempore sed impedit
                            voluptatibus. Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt lorem.
                        </Col>
                    </Row>

                    <Row>
                        <Col>Customer A&nbsp;&nbsp;-&nbsp;&nbsp;May 01, 2021</Col>
                    </Row>
                    <Row>
                        <Col>
                            <StarRatings
                                rating={4.5}
                                starRatedColor="black"
                                numberOfStars={5}
                                starDimension="11px"
                                starSpacing="3px"
                            />
                        </Col>
                    </Row>
                    <Row className="end-of-review">
                        <Col>
                            Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt tempore sed impedit
                            voluptatibus. Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt. Lorem
                            ipsum dolor sit amet. Qui quod voluptate At deserunt tempore sed impedit
                            voluptatibus. Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt lorem.
                        </Col>
                    </Row>

                    <Row>
                        <Col>Customer A&nbsp;&nbsp;-&nbsp;&nbsp;May 01, 2021</Col>
                    </Row>
                    <Row>
                        <Col>
                            <StarRatings
                                rating={4.5}
                                starRatedColor="black"
                                numberOfStars={5}
                                starDimension="11px"
                                starSpacing="3px"
                            />
                        </Col>
                    </Row>
                    <Row className="end-of-review">
                        <Col>
                            Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt tempore sed impedit
                            voluptatibus. Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt. Lorem
                            ipsum dolor sit amet. Qui quod voluptate At deserunt tempore sed impedit
                            voluptatibus. Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt lorem.
                        </Col>
                    </Row>

                    <Row>
                        <Col>Customer A&nbsp;&nbsp;-&nbsp;&nbsp;May 01, 2021</Col>
                    </Row>
                    <Row>
                        <Col>
                            <StarRatings
                                rating={4.5}
                                starRatedColor="black"
                                numberOfStars={5}
                                starDimension="11px"
                                starSpacing="3px"
                            />
                        </Col>
                    </Row>
                    <Row className="end-of-review">
                        <Col>
                            Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt tempore sed impedit
                            voluptatibus. Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt. Lorem
                            ipsum dolor sit amet. Qui quod voluptate At deserunt tempore sed impedit
                            voluptatibus. Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt lorem.
                        </Col>
                    </Row>

                    <Row>
                        <Col>Customer A&nbsp;&nbsp;-&nbsp;&nbsp;May 01, 2021</Col>
                    </Row>
                    <Row>
                        <Col>
                            <StarRatings
                                rating={4.5}
                                starRatedColor="black"
                                numberOfStars={5}
                                starDimension="11px"
                                starSpacing="3px"
                            />
                        </Col>
                    </Row>
                    <Row className="end-of-review">
                        <Col>
                            Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt tempore sed impedit
                            voluptatibus. Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt. Lorem
                            ipsum dolor sit amet. Qui quod voluptate At deserunt tempore sed impedit
                            voluptatibus. Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt lorem.
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>

            <Row className="merchant-stats">
                <Col md={1}>&nbsp;</Col>
                <Col md={5} className="merchant-details">
                    <div className="logo"><img src={sampleLogo} alt="Merchant Logo" /></div>
                    <div>
                        <p><strong>Company Name</strong></p>
                        <p>Address: Lorem ipsum lorem ipsum
                            Lorem ipsum lorem ipsum
                        </p>
                        <p>Contact: +1234 5678</p>
                        <p>Email: abc@gmail.com</p>
                    </div>
                </Col>
                <Col md={4} className="merchant-info">
                    <Row className="stat">
                        <Col md={6}>
                            <img src={packaged} alt="Products" />
                            Products: <span>68</span>
                        </Col>
                        <Col md={6}>
                            <img src={shipping} alt="Delivery" />
                            Delivery: <span>Within 7 days</span>
                        </Col>
                    </Row>

                    <Row className="stat">
                        <Col md={6}>
                            <img src={rating} alt="Rating" />
                            Rating: <span>4.8</span>
                        </Col>
                        <Col md={6}>
                            <img src={profile} alt="Joined" />
                            Joined: <span>2 months ago</span>
                        </Col>
                    </Row>

                    <Row className="stat">
                        <Col md={6}>
                            <img src={chat} alt="Response" />
                            Response: <span>100%</span>
                        </Col>
                        <Col md={6}>
                            <img src={follow} alt="Followers" />
                            Followers: <span>109</span>
                        </Col>
                    </Row>

                </Col>
                <Col md={2}>&nbsp;</Col>
            </Row>

            <Row className="merchant-main-menu">
                <Col md={1}>&nbsp;</Col>
                <Col md={8}>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#" onClick={openReviewSection}>Reviews</a></li>
                        <li><a href="#">Delivery</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </Col>
                <Col className="actions text-center" md={3}>
                    <Button><HeartFill size={14} color="#FA4A17" /></Button>{' '}
                    <Button>Follow</Button>
                </Col>
            </Row>

            <Collections title="Browse Collections from Bohemiana" />

            <Row className="merchant-products">
                <Col md={1}>&nbsp;</Col>
                <Col md={2} className="category-choices">
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />

                </Col>
                <Col md={9} className="search-product-list">
                    <Row>
                        <Col md={1}>&nbsp;</Col>
                        <Col md={6} className="section-title d-flex justify-content-start align-items-end">{'All Products (201)'}</Col>

                        <Col md={3} className="text-center justify-content-start align-items-end">
                            <div className={"d-flex justify-content-start align-items-center searchbar"}>
                                <Search className={"text-dark"} />
                                <input placeholder={"Search in shop"} className={"border-0 pl-2"} />
                            </div>
                        </Col>

                        <Col md={2} className="text-center justify-content-start align-items-end">
                            <Form.Group controlId="selFilter" className="filter">
                                <Form.Control as="select" Style={"font-weight: bold;"}>
                                    <option>Filter By</option>
                                    <option>Popularity</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="product-cards text-center">
                        <ProductCard_Search popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$1200" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard_Search popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$400" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard_Search popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$300" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard_Search popularTag="Popular" isWishlist={false} productName="Chair"
                            productPrice="$800" productCompany="Company AB" productExtraInfo="1 Color" />
                    </Row>
                    <Row className="product-cards text-center">
                        <ProductCard_Search popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$1200" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard_Search popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$400" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard_Search popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$300" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard_Search popularTag="Popular" isWishlist={false} productName="Chair"
                            productPrice="$800" productCompany="Company AB" productExtraInfo="1 Color" />
                    </Row>
                    <Row className="product-cards text-center">
                        <ProductCard_Search popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$1200" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard_Search popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$400" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard_Search popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$300" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard_Search popularTag="Popular" isWishlist={false} productName="Chair"
                            productPrice="$800" productCompany="Company AB" productExtraInfo="1 Color" />
                    </Row>
                    <Row className="product-cards text-center">
                        <ProductCard_Search popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$1200" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard_Search popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$400" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard_Search popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$300" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard_Search popularTag="Popular" isWishlist={false} productName="Chair"
                            productPrice="$800" productCompany="Company AB" productExtraInfo="1 Color" />
                    </Row>
                    <Row className="product-cards text-center">
                        <ProductCard_Search popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$1200" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard_Search popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$400" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard_Search popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$300" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard_Search popularTag="Popular" isWishlist={false} productName="Chair"
                            productPrice="$800" productCompany="Company AB" productExtraInfo="1 Color" />
                    </Row>
                    <div className={"row"}>
                        <div className="col col-4">

                        </div>
                        <div className="col col-4 pager mb-4">
                            <a href="#" className={"arrow"}> <ArrowLeftCircle /></a>

                            <div className={"d-inline-block"}><a href="#">1</a></div>
                            <div className={"d-inline-block"}><a href="#">2</a></div>
                            <div className={"d-inline-block"}><a href="#">3</a></div>
                            <div className={"d-inline-block"}><a href="#">...</a></div>
                            <div className={"d-inline-block"}><a href="#">8</a></div>

                            <a href="#" className={"arrow"}> <ArrowRightCircle /></a>

                        </div>
                        <div className="col col-3">
                            <Form.Group controlId="itemspp" className="itemspp">
                                <Form.Control as="select" Style={"font-weight: bold;"}>
                                    <option>Items Per Page: 9</option>
                                    <option>19</option>
                                    <option>27</option>
                                    <option>100</option>
                                </Form.Control>
                            </Form.Group>
                        </div>
                        <div className={"col-2"}></div>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default MerchantHome;