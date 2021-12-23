import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MiniStripPromo({promoText}) {
    return (
        <>
            <Row className="page-promo-strip">
                {/* <Col md={2}>&nbsp;</Col> */}
                <Col md={6} className="promo">{promoText}&nbsp;<a href="#">{'T&C apply.'}</a></Col>
                {/* <Col md={2} className="promo"><a href="#">{'T&C apply.'}</a></Col> */}
                {/* <Col>&nbsp;</Col> */}
            </Row>
        </>
    );
}

export default MiniStripPromo;