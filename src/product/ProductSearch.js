import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ProductCard from '../product/ProductCard';
import Category from '../merchant/Category';

function ProductSearch() {
    return (
        <>
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
                        <Col md={9} className="section-title">{'Search Results (60)'}</Col>
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
                        <ProductCard popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$1200" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$1200" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$300" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard popularTag="Popular" isWishlist={false} productName="Chair"
                            productPrice="$800" productCompany="Company AB" productExtraInfo="1 Color" />
                    </Row>
                    <Row className="product-cards text-center">
                        <ProductCard popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$1200" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$400" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$300" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard popularTag="Popular" isWishlist={false} productName="Chair"
                            productPrice="$800" productCompany="Company AB" productExtraInfo="1 Color" />
                    </Row>
                    <Row className="product-cards text-center">
                        <ProductCard popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$1200" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$400" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$300" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard popularTag="Popular" isWishlist={false} productName="Chair"
                            productPrice="$800" productCompany="Company AB" productExtraInfo="1 Color" />
                    </Row>
                    <Row className="product-cards text-center">
                        <ProductCard popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$1200" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$400" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$300" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard popularTag="Popular" isWishlist={false} productName="Chair"
                            productPrice="$800" productCompany="Company AB" productExtraInfo="1 Color" />
                    </Row>
                    <Row className="product-cards text-center">
                        <ProductCard popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$1200" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$400" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard popularTag="" isWishlist={false} productName="Chair"
                            productPrice="$300" productCompany="Company AB" productExtraInfo="1 Color" />
                        <ProductCard popularTag="Popular" isWishlist={false} productName="Chair"
                            productPrice="$800" productCompany="Company AB" productExtraInfo="1 Color" />
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default ProductSearch;