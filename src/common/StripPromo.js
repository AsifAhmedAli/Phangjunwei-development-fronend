import like_icon from '../images/like_icon_strip.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function StripPromo() {
    return (
        <>
            <Row className="page-merchant-break text-center">
                <Col className={"col-6 col-md-3"}>
                    <img src={like_icon} alt="like icon" /> Lorem ipsum dolor
                </Col>
                <Col className={"col-6 col-md-3"}>
                    <img src={like_icon} alt="like icon"/> Lorem ipsum dolor
                </Col>
                <Col className={"col-6 col-md-3"}>
                    <img src={like_icon} alt="like icon"/> Lorem ipsum dolor
                </Col>
                <Col className={"col-6 col-md-3"}>
                    <img src={like_icon} alt="like icon"/> Lorem ipsum dolor
                </Col>
            </Row>
        </>
    );
}

export default StripPromo;