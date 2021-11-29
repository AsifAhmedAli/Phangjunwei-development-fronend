import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import QuickMenu from './QuickMenu';


import order_img from '../images/products/1002/orders_img.png';

function Purchases() {

    return (
        <>
            <Row className="profile-quick-view">
                <QuickMenu selectedMenu="Purchase History" />
                <Col md={7} className="text-left purchase-history">
                    <div className="title">Purchase History (1)</div>
                    <Row className="orders">
                        <Col>
                            <Row>
                                <Col md={9}>
                                    <div><strong>Order Number:</strong> 123456</div>
                                    <div><strong>Shipping Date:</strong> 31/06/21</div>
                                    <div>Status: <span className="order-status">Confirmed</span></div>
                                </Col>
                                <Col md={3} className="text-center">
                                    <Button variant="secondary" className="btn-order-action btn-contact">Contact Seller</Button>
                                </Col>
                            </Row>
                            <Row className="ordered-items">
                                <Col md={9}>
                                    <Row>
                                        <Col md={3}><img src={order_img} /></Col>
                                        <Col md={3}><img src={order_img} /></Col>
                                        <Col md={3}><img src={order_img} /></Col>
                                        <Col md={3}><img src={order_img} /></Col>
                                        <Col md={3}><img src={order_img} /></Col>
                                        <Col md={3}><img src={order_img} /></Col>
                                        <Col md={3}><img src={order_img} /></Col>
                                    </Row>
                                </Col>
                                <Col md={3} className="text-center">
                                    <Button variant="dark" className="btn-order-action-1 btn-view-order">View Order</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="orders">
                        <Col>
                            <Row>
                                <Col md={9}>
                                    <div><strong>Order Number:</strong> 889701</div>
                                    <div><strong>Shipping Date:</strong> 31/06/21</div>
                                    <div>Status: <span className="order-status">Confirmed</span></div>
                                </Col>
                                <Col md={3} className="text-center">
                                    <Button variant="secondary" className="btn-order-action btn-contact">Contact Seller</Button>
                                </Col>
                            </Row>
                            <Row className="ordered-items">
                                <Col md={9}>
                                    <Row>
                                        <Col md={3}><img src={order_img} /></Col>
                                        <Col md={3}><img src={order_img} /></Col>
                                        <Col md={3}><img src={order_img} /></Col>
                                    </Row>
                                </Col>
                                <Col md={3} className="text-center">
                                    <Button variant="dark" className="btn-order-action-1 btn-view-order">View Order</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col md={1}>&nbsp;</Col>
            </Row>
        </>
    );
}

export default Purchases;