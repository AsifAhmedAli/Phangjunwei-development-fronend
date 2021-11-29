import like_icon from '../images/like_icon_strip.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function StripPromo() {
    return (
        <>
            <Row className=" text-center-thumbsup">
                <Col className={"col-3 col-md-3 thumbsup-text"}>
                    <img src={like_icon} alt="like icon" className="thumbsup-img" /> Lorem ipsum dolor
                </Col>
                <Col className={"col-3 col-md-3 thumbsup-text"}>
                    <img src={like_icon} alt="like icon" className="thumbsup-img"/> Lorem ipsum dolor
                </Col>
                <Col className={"col-3 col-md-3 thumbsup-text"}>
                    <img src={like_icon} alt="like icon" className="thumbsup-img"/> Lorem ipsum dolor
                </Col>
                <Col className={"col-3 col-md-3 thumbsup-text"}>
                    <img src={like_icon} alt="like icon" className="thumbsup-img"/> Lorem ipsum dolor
                </Col>
            </Row>
        </>
    );
}

export default StripPromo;
