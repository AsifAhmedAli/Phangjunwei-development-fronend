import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import careers_bg from '../images/career.png';
import careers_logo from '../images/career-logo.png';

function Careers() {

    return (
        <>
            <Row>
                <Col className="text-center m-0 p-0 merchant-photography">
                    <img src={careers_bg}/>
                </Col>
            </Row>
            <Row className="career-page-title text-center">
                <Col>
                    <div><h2><strong>CURRENT OPENINGS</strong></h2>
                        <div className="subtitle">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
                    </div>
                </Col>
            </Row>

            <Row className="career-container text-center">
                <Col>
                    <Row className="vacant-position text-left">
                        <Col className="">
                            <div className="title">JOB TITLE</div>
                            <div>Lorem ipsum Lorem ipsum Lorem. Lorem ipsum</div>
                        </Col>
                        <Col>Lorem ipsum </Col>
                        <Col>Lorem ipsum Lorem ipsum</Col>
                    </Row>

                    <Row className="vacant-position text-left">
                        <Col className="">
                            <div className="title">JOB TITLE</div>
                            <div>Lorem ipsum Lorem ipsum Lorem. Lorem ipsum</div>
                        </Col>
                        <Col>Lorem ipsum </Col>
                        <Col>Lorem ipsum Lorem ipsum</Col>
                    </Row>

                    <Row className="vacant-position text-left">
                        <Col className="">
                            <div className="title">JOB TITLE</div>
                            <div>Lorem ipsum Lorem ipsum Lorem. Lorem ipsum</div>
                        </Col>
                        <Col>Lorem ipsum </Col>
                        <Col>Lorem ipsum Lorem ipsum</Col>
                    </Row>

                    <Row className="vacant-position text-left">
                        <Col className="">
                            <div className="title">JOB TITLE</div>
                            <div>Lorem ipsum Lorem ipsum Lorem. Lorem ipsum</div>
                        </Col>
                        <Col>Lorem ipsum </Col>
                        <Col>Lorem ipsum Lorem ipsum</Col>
                    </Row>

                    <Row className="vacant-position text-left">
                        <Col className="">
                            <div className="title">JOB TITLE</div>
                            <div>Lorem ipsum Lorem ipsum Lorem. Lorem ipsum</div>
                        </Col>
                        <Col>Lorem ipsum </Col>
                        <Col>Lorem ipsum Lorem ipsum</Col>
                    </Row>

                    <br/>
                    <Button variant="outline-secondary" className="expand">View more</Button>
                    <br/><br/>

                    <Row className="application-info text-left">
                        <Col>
                            <h5><strong>APPLICATION DETAILS</strong></h5>
                            <div>
                                Kindly send over your CV with any additional portfolio if application along with the
                                position you are
                                applying for to <ins>jobs@burrows.sg</ins>. We look forward to working together with
                                people that share the
                                same passion and vision as us.
                            </div>
                            <br/><br/>
                            <div>
                                <img src={careers_logo} alt="careers-logo"/>
                                <div className="mt-2">Burrows Pte Ltd</div>
                                <div>Lorem ipsum XX-XX</div>
                                <div>Singapore XXXXXX</div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>


        </>
    );
}

export default Careers;