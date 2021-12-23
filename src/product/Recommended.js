import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ProductCard from '../product/ProductCard';
import {useState} from "react";

function Recommended() {
    const[len, setLen] = useState(new Array(10).fill(0))
    return (
        <>
            <Row className="page-product-list-more">
                <Col>
                    <Row>
                        <Col md={9} className="section-title">Recommended for you</Col>
                        <Col md={3} className="text-right">
                            <Form.Group controlId="selFilter" className="filter">
                                <Form.Control as="select">
                                    <option>Filter By</option>
                                    <option>Popularity</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="product-cards text-center px-0 px-md-5 py-0 justify-content-start">

                        {len.map((m, key)=>{
                            return(
                                <div key={key} className={"mb-2 mx-2"}>
                                    <ProductCard popularTag="" isWishlist={false} productName="Chair"
                                                 productPrice="$400" productCompany="Company C" productExtraInfo="1 Color" />
                                </div>
                            )
                        })}
                    </Row>

                    <Row className="text-center mb-3">
                        <Col>
                            <Button variant="outline-secondary" onClick={()=>{
                                setLen(new Array(len.length+4).fill(0))
                            }}>View more</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}
export default Recommended;