import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuickMenu from './QuickMenu';

function PaymentMethod() {
    return (
        <>
            <Row className="profile-quick-view">
                <QuickMenu selectedMenu="Payment Methods" />
                <Col md={7} className="text-left purchase-history">
                    <div className="title">Payment Methods</div>
                    
                </Col>
                <Col md={1}>&nbsp;</Col>
            </Row>
        </>
    );
}

export default PaymentMethod;