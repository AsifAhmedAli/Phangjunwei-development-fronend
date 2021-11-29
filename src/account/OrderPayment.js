import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

//payment icon
import visa_card from '../images/card-visa2.png';
import amex_card from '../images/card-amex2.png';
import apple_card from '../images/card-applepay2.png';
import google_card from '../images/card-googlepay2.png';
import maestro_card from '../images/card-maestro2.png';
import master_card from '../images/card-master2.png';

function OrderPayment() {

    return (
        <>
            <Row className="my-cart-container">
                <Col md={2}>&nbsp;</Col>
                <Col md={5} className="mt-3">
                    <div className="title">Payment</div>
                    <Form id="form-payment" className="pay-form">
                        <div className="form-title mb-3">Select Payment Method</div>
                        <Form.Check type="radio" className="form-cat-title" label="Credit/Debit Card" checked />
                        <InputGroup className="mb-3">
                            <FormControl placeholder="Enter your card number here" aria-describedby="exp-date" />
                            <InputGroup.Append>
                                <InputGroup.Text id="exp-date">
                                    <Form.Control type="text" placeholder="MM/YY" />
                                </InputGroup.Text>
                            </InputGroup.Append>
                            <InputGroup.Append>
                                <InputGroup.Text id="card-extra">
                                    <Form.Control type="password" placeholder="CVC" />
                                </InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        <Form.Group controlId="form-ship-default">
                            <Form.Check type="checkbox" className="save-card" label="Save my card details for future orders" />
                        </Form.Group>

                        <hr />
                        <div><strong>Billing Address</strong></div>
                        <Form.Group controlId="form-ship-default">
                            <Form.Check type="checkbox" className="form-cat-title" label="Same as Shipping Address" />
                            <div className="ship-details">
                                <div>Customer A</div>
                                <div>abc@gmail.com</div>
                                <div>0123456789</div>
                                <div>11 BALESTIER HILL</div>
                                <div>Singapore 330011</div>
                            </div>
                        </Form.Group>

                        <hr />
                        <div><strong>Order Summary</strong></div>
                        <Form.Group as={Row} controlId="form-subtotal">
                            <Form.Label column md="4">Sub-total:</Form.Label>
                            <Col md="8">
                                <Form.Control className="text-right" plaintext readOnly value={'$39.90'} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="form-subtotal">
                            <Form.Label column md="4">Delivery:</Form.Label>
                            <Col md="8">
                                <Form.Control className="text-right" plaintext readOnly value={'$10'} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="form-subtotal">
                            <Form.Label column md="4">Total:</Form.Label>
                            <Col md="8">
                                <Form.Control className="text-right" className="text-right total-price" plaintext readOnly value={'SGD $49.90'} />
                            </Col>
                        </Form.Group>

                        <Button variant="dark" type="submit">Complete Order</Button>
                    </Form>
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
                                    <Form.Control as="select" disabled>
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
                            </Form>
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

export default OrderPayment;