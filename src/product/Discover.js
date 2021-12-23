import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import discover from '../images/bg-discover.png'

function Discover({title}) {
    return (
        <>
            <Row className="page-info-break discover-section">
                <Col className={"col-12 col-md-6 d-flex justify-content-center align-items-center order-md-0 order-1"}>
                    <div className={"w-75"} >
                        <div className="break-title">{title}</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium alias cum deserunt
                            dignissimos dolore dolorem et ex impedit ipsa labore numquam ratione rem, sequi similique velit
                            veritatis voluptates! Temporibus.</p>
                        <a href="#" className={"btn btn-primary px-3 mt-3"}>View More</a>
                    </div>
                </Col>
                <Col className={"col-12 col-md-6 order-md-1 order-0"} id={"discover-bg"}>
                    <br/>
                    <br/>
                    </Col>
            </Row>
        </>
    );
}

export default Discover;