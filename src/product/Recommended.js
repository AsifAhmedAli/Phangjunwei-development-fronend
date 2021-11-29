import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ProductCard from '../product/ProductCard';
import { useState } from "react";
import { GET_MERCHANT_PRODUCTS } from '../graphql/queries';
import { useQuery } from '@apollo/client';

function Recommended() {
    const [len, setLen] = useState(new Array(10).fill(0))
    const { loading, error, data } = useQuery(GET_MERCHANT_PRODUCTS, {
        variables: {
            id: 1,
        }
    });
    const products = data?.merchantProducts;
    return (
        <>
            <Row className="page-product-list-more recommended-div">
                <Col>
                    <div className='recommended-section-row'>
                        <div className="recommended-section-title">RECOMMENDED FOR YOU</div>
                    </div>
                    <div className="text-right filterbox" >
                        <Form.Group controlId="selFilter" className="filter">
                            <Form.Control as="select">
                                <option>Filter By</option>
                                <option>Popularity</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </Form.Control>
                        </Form.Group>
                    </div>

                    <Row className="product-cards recommended-product-main-div">
                        {loading ? <div>loading....</div> :
                            <>
                                {products?.map((product, key) => {
                                    return (
                                        <div key={key} className={" px-0 py-1  mx-auto"} style={{ marginBottom: '-2vh' }}>
                                            <ProductCard popularTag={product.skuTag} isWishlist={false} productName={product.skuName}
                                                productPrice={product.skuPrice} productCompany={product.skuCompany} productExtraInfo={product.skuColor} productDetails={product} />
                                        </div>
                                    )
                                })}
                            </>
                        }
                    </Row>

                    <Row className="text-center mb-3">
                        <Col>
                            <Button variant="outline-secondary" onClick={() => {
                                setLen(new Array(len.length + 4).fill(0))
                            }}>View more</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}
export default Recommended;
