import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import carousel_img from '../images/carousel_sample.png';
import merchant_img from '../images/merchant_bg.png';
import cat_img from '../images/category/cat_1.png';
import sampleLogo from '../images/merchant/1/Image 477.png';
import packaged from '../images/merchant/1/Image 478.png';
import rating from '../images/merchant/1/Image 479.png';
import shipping from '../images/merchant/1/Image 481.png';
import chat from '../images/merchant/1/Image 482.png';
import profile from '../images/merchant/1/Image 480.png';
import follow from '../images/merchant/1/Image 483.png';

function MerchantCarousel() {
    return (
        <div className="merchant-page-carousel">
            <Row className="page-header-category-menu carousel  text-center">
                <Col className="p-0">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 home-slider-image"
                                src={merchant_img}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 home-slider-image"
                                src={merchant_img}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 home-slider-image"
                                src={merchant_img}
                                alt="Third slide"
                            />
                        </Carousel.Item>

                    </Carousel>
                </Col>
            </Row>

            <Row className="merchant-stats">
                <Col md={4} className="merchant-details">
                    <div>
                        <p>Company Name</p>
                        <p>Address: Lorem ipsum lorem ipsum
                            Lorem ipsum lorem ipsum
                        </p>
                        <p>Contact: +1234 5678</p>
                        <p>Email: abc@gmail.com</p>
                    </div>
                    <div className="merchant-line"></div>
                </Col>
                <Col md={8} className="merchant-info">
                    <Row className="stat">
                        <Col md={1} className="merchant-line"></Col>
                        <Col md={5}>
                            <img src={packaged} alt="Products" />
                            Products: <span>68</span>
                        </Col>
                        <Col md={6}>
                            <img src={shipping} alt="Delivery" />
                            Delivery: <span>Within 7 days</span>
                        </Col>
                    </Row>

                    <Row className="stat">
                        <Col md={1} className="merchant-line"></Col>
                        <Col md={5}>
                            <img src={rating} alt="Rating" />
                            Rating: <span>4.8</span>
                        </Col>
                        <Col md={6}>
                            <img src={profile} alt="Joined" />
                            Joined: <span>2 months ago</span>
                        </Col>
                    </Row>

                    <Row className="stat">
                        <Col md={1} className="merchant-line"></Col>
                        <Col md={5}>
                            <img src={chat} alt="Response" />
                            Response: <span>100%</span>
                        </Col>
                        <Col md={6}>
                            <img src={follow} alt="Followers" />
                            Followers: <span>109</span>
                        </Col>
                    </Row>

                </Col>
            </Row>

        </div>
        
    );
}

export default MerchantCarousel;
