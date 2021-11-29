import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import MiniDiscover from './MiniDiscover';

//payment icon
import visa_card from '../images/card-visa2.png';
import amex_card from '../images/card-amex2.png';
import apple_card from '../images/card-applepay2.png';
import google_card from '../images/card-googlepay2.png';
import maestro_card from '../images/card-maestro2.png';
import master_card from '../images/card-master2.png';
import like_icon from '../images/like_icon_strip.png';
import img_prod from '../images/products/1002/orders_img.png';

import { X, XLg } from 'react-bootstrap-icons';

function MyCart() {

    const handleCheckout = (e) => {
        let base_url = window.location.origin;

        window.location.replace(base_url + '/my-cart/shipping');
    }
    return (
        <>
            <Row className="my-cart-container">
                <Col md={2}>&nbsp;</Col>
                <Col md={5} className="mt-3">
                    <div className="title">My Cart (1)</div>
                    <Row className="product-short-detail">
                        <XLg size={14} className="remove-item" />
                        <Col md={3} className="text-center"><img src={img_prod} /></Col>
                        <Col md={9}>
                            <div><strong>{'$39.90'}</strong></div>
                            <div className="prod-name">Fabric Chair</div>
                            <div>
                                <InputGroup>
                                    <span className="qty">Qty</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <InputGroup.Prepend>
                                        <Button variant="dark">-</Button>
                                    </InputGroup.Prepend>
                                    <FormControl defaultValue="1" />
                                    <InputGroup.Append>
                                        <Button variant="dark">+</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </div>
                            <div><a href="#">Save for later</a>&nbsp;&nbsp;<a href="#">View Item</a></div>
                        </Col>
                    </Row>
                    <Row className="extra-info">
                        <Col md={2} className="text-center"><img src={like_icon} /></Col>
                        <Col md={10}>
                            <div><strong>Lorem ipsum</strong></div>
                            <div>Lorem ipsum Lorem ipsum Lorem ipsum.</div>
                            <div><a href="#">More info</a></div>
                        </Col>
                    </Row>
                    <Row className="extra-info">
                        <Col md={2} className="text-center"><img src={like_icon} /></Col>
                        <Col md={10}>
                            <div><strong>Lorem ipsum</strong></div>
                            <div>Lorem ipsum Lorem ipsum Lorem ipsum.</div>
                            <div><a href="#">More info</a></div>
                        </Col>
                    </Row>
                    <Row className="extra-info">
                        <Col>
                            <MiniDiscover title="You may also like this" />
                        </Col>
                    </Row>
                </Col>

                <Col md={3} className="mt-3">
                    <Row className="itemization">
                        <Col>
                            <div><strong>7 Items</strong></div>
                            <hr />
                            <Form>
                                <Form.Group as={Row} controlId="form-subtotal">
                                    <Form.Label column md="4">Sub-total</Form.Label>
                                    <Col md="8">
                                        <Form.Control className="text-right" plaintext readOnly value={'SGD $39.90'} />
                                    </Col>
                                </Form.Group>

                                <Form.Group controlId="form-delivery">
                                    <Form.Label>Delivery</Form.Label>
                                    <Form.Control as="select">
                                        <option>Standard Delivery ($10)</option>
                                        <option>LBC Express ($20)</option>
                                    </Form.Control>
                                </Form.Group>

                                <hr />
                                <Form.Group as={Row} controlId="form-total">
                                    <Form.Label column md="4">Total</Form.Label>
                                    <Col md="8">
                                        <Form.Control className="text-right" plaintext readOnly value={'SGD $49.90'} />
                                    </Col>
                                </Form.Group>

                                <Button variant="dark" onClick={handleCheckout}>Checkout</Button>
                            </Form>
                        </Col>
                    </Row>

                    <br />
                    <Row className="promo-detail">
                        <Col>
                            <div><strong>Apply Promo Code</strong></div>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Enter Promo Code"
                                    aria-label="Enter Promo Code"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button variant="dark">Apply</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row className="pay-method text-center">
                        <Col>
                            <hr />
                            <div className="text-left"><strong>Payment Methods</strong></div>
                            <Row>
                                <Col md={2}><img src={visa_card} alt="visa-card" /></Col>
                                <Col md={2}><img src={master_card} alt="master-card" /></Col>
                                <Col md={2}><img src={maestro_card} alt="maestro-card" /></Col>
                                <Col md={2}><img src={apple_card} alt="apple-card" /></Col>
                                <Col md={2}><img src={google_card} alt="google-card" /></Col>
                                <Col md={2}><img src={amex_card} alt="amex-card" /></Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col md={2}>&nbsp;</Col>
            </Row>
        </>
    );
}

export default MyCart;