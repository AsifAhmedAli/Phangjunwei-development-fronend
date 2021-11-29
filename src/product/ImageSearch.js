import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ProductCard_Search from '../product/ProductCard';
import Button from 'react-bootstrap/Button';
import { Search, ArrowLeftCircle, ArrowRightCircle } from "react-bootstrap-icons";
import img_search from '../images/image_search.png';

function ImageSearch() {
    return(
        <>
            <Row className="merchant-products">
                <Col md={1}>&nbsp;</Col>
                <Col md={2} className="text-center">
                    <img src={img_search} />
                    <br />
                    <Button variant="dark" className="btn-recapture-img">Edit</Button>
                </Col>
                <Col md={9} className="search-product-list image-search">
                    <Row>
                        <Col md={1}>&nbsp;</Col>
                        <Col md={6} className="section-title">{'Search Results (21)'}</Col>
                        <Col md={3} className="text-center justify-content-start align-items-end">
                            <div className={"d-flex justify-content-start align-items-center searchbar"}>
                                <Search className={"text-dark"} />
                                <input placeholder={"Search in shop"} className={"border-0 pl-2"} />
                            </div>
                        </Col>
                        <Col md={2} className="text-center">
                            <Form.Group controlId="selFilter" className="filter">
                                <Form.Control as="select" >
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
                </Col>
            </Row>
        </>
    );
}

export default ImageSearch;