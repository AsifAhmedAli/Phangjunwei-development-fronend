import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ProductCard_Search from '../product/ProductCard';
import Category from '../merchant/Category';
import {Search, ArrowLeftCircle, ArrowRightCircle} from "react-bootstrap-icons";
import ProductCard from '../product/ProductCard';


function CategorySearch() {
    return (
        <>
            <Row className="merchant-products">
                {/*<Col md={1}>&nbsp;</Col>*/}
                <Col md={3} className="category-choices px-3">
                    <div className={"cat-card mx-3"}>
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <div className={"mt-3"}>
                            <a href="#" className={"orange-link btn-link"}>View More</a>
                        </div>
                    </div>

                </Col>
                <Col md={9} className="search-product-list">
                    <div className="row justify-content-between">
                        <Form.Group controlId="selFilter" className="filter p-0">
                            <Form.Control as="select" Style={"font-weight: bold;"}>
                                <option>Filter By</option>
                                <option>Popularity</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </Form.Control>
                        </Form.Group>

                        <div className={"d-flex justify-content-start align-items-center searchbar py-0 mr-md-5"}>
                            <Search className={"text-dark"}/>
                            <input placeholder={"Search in shop"} className={"border-0 pl-2"}/>
                        </div>
                    </div>
                    <Row>
                        <Col md={1}>&nbsp;</Col>
                        <Col md={6} className="section-title d-flex justify-content-start align-items-end">
                            {'All Products (201)'}
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
                        <div className="col col-3">

                        </div>
                        <div className="col col-6 pager mb-4">
                            <a href="#" className={"arrow"}> <ArrowLeftCircle/></a>

                            <div className={"d-inline-block"}><a href="#">1</a></div>
                            <div className={"d-inline-block"}><a href="#">2</a></div>
                            <div className={"d-inline-block"}><a href="#">3</a></div>
                            <div className={"d-inline-block"}><a href="#">...</a></div>
                            <div className={"d-inline-block"}><a href="#">8</a></div>

                            <a href="#" className={"arrow"}> <ArrowRightCircle/></a>

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
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default CategorySearch;