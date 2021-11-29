import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Instagram, Facebook} from "react-bootstrap-icons";


function MerchantBanner() {

    return (
        <>
            <Row className="page-info-break discover-section">
                <Col className={"col-12 col-md-6 order-md-0 order-1"}
                Style={"background-image: url('https://via.placeholder.com/500'); background-size: cover; background-position: center;"}>
                    <br/>
                    <br/>
                </Col>

                <Col className={"col-12 col-md-6 d-flex justify-content-center align-items-center order-md-1 order-0"}>
                    <div className={"w-75"} >
                        <div className="break-title">About Bohemia</div>
                        <p className={"w-75"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium alias cum deserunt
                            dignissimos dolore dolorem et ex impedit ipsa labore numquam ratione rem, sequi similique velit
                            veritatis voluptates! Temporibus.</p>
                        <span><Instagram size={22} className={"mr-4"}/><Facebook size={22}/></span>
                    </div>
                </Col>

            </Row>
        </>
    );
}

export default MerchantBanner;