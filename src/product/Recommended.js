import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ProductCard from '../product/ProductCard';
import { useState } from "react";
import { GET_PRODUCTS } from '../graphql/queries';
import { useQuery } from '@apollo/client';

function Recommended() {
    const [offset, setOffset] = useState(0);
    const { loading, error, data, fetchMore } = useQuery(GET_PRODUCTS, {
        variables: {
            offset: offset
        }
    });

    let products = data && data.allProducts.content;
    const totalPages = data && data.allProducts.totalPages;

    const moreProducts = async () => {
        await fetchMore({ variables: { offset: offset + 1 } })
    }

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
                            <Button variant="outline-secondary" onClick={moreProducts}>View more</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}
export default Recommended;
