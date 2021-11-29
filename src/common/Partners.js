import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import partner1 from '../images/partner1.png';
import partner2 from '../images/partner2.png';
import partner3 from '../images/partner3.png';
import partner4 from '../images/partner4.png';

function Partners() {
    return (
        <>
            <Row className="site-partners bg-white">
                <Col className={"container bg-white"}>
                    <Row className="text-left title"><Col>{'Official Partners & Merchants'}</Col></Row>
                    <div className={"d-flex justify-content-center bg-white"}>
                        <div className={"mx-5"}><img src={partner1} alt="partner 1"  className={"img-fluid"}/></div>
                        <div className={"mx-5"}><img src={partner2} alt="partner 2" className={"img-fluid"}/></div>
                        <div className={"mx-5"}><img src={partner3} alt="partner 3" className={"img-fluid"}/></div>
                        <div className={"mx-5"}><img src={partner4} alt="partner 4" className={"img-fluid"}/></div>
                    </div>
                </Col>

            </Row>
        </>
    );
}

export default Partners;