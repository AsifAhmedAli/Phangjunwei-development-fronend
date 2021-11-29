import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MiniStripPromo({promoText}) {
    return (
        <>
            <Row className="page-promo-strip d-flex align-content-center">
                {/* <Col md={2}>&nbsp;</Col> */}
                <Col md={12} className="promo">{promoText}&nbsp;<a href="#">{'T&C apply.'}</a></Col>
                {/* <Col md={2} className="promo"><a href="#">{'T&C apply.'}</a></Col> */}
                {/* <Col>&nbsp;</Col> */}
            </Row>
        </>
    );
}

export default MiniStripPromo;
