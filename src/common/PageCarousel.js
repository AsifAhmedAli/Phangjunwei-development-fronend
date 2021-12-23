import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import carousel_img from '../images/carousel_sample.png';
import merchant_img from '../images/merchant_bg.png';
import cat_img from '../images/category/cat_1.png'

function PageCarousel({isHomePage, isCategory}) {
    return (
        <>
            <Row className="page-header-category-menu carousel text-center">
                <Col className="p-0">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={isHomePage ? carousel_img : (isCategory ? cat_img : merchant_img)}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={isHomePage ? carousel_img : (isCategory ? cat_img : merchant_img)}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={isHomePage ? carousel_img : (isCategory ? cat_img : merchant_img)}
                                alt="Third slide"
                            />
                        </Carousel.Item>

                    </Carousel>
                </Col>
            </Row>
        </>
    );
}

export default PageCarousel;