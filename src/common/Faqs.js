import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import orders from '../images/faq/orders.png';
import delivery from '../images/faq/delivery.png';
import genInfo from '../images/faq/general_information.png';
import itRepair from '../images/faq/it_repair.png';
import returns from '../images/faq/returns.png';
import userAcct from '../images/faq/user_acct.png';

function Faqs() {

    return (
        <>
            <Row className="privacy-cookie">
                <Col>
                    <div className="title text-center mt-4">
                        <h2><strong>FAQ TOPICS</strong></h2>
                    </div>
                    <Row className="faqs text-center d-flex justify-content-center">
                        <Col className="col-md-3  col-sm-12 col-12" >
                            <img src={orders} />
                            <div className="topic">{'Orders & Payment'}</div>
                            <hr />
                            <ul className="subtopic">
                                <li><a href="#">Lorem ipsum</a></li>
                                <li><a href="#">Lorem ipsum</a></li>
                                <li><a href="#">Lorem ipsum</a></li>
                            </ul>
                            <div className="view-all"><a href="#">View All</a></div>
                        </Col>
                        <Col className="col-md-3 col-sm-12 col-12">
                            <img src={delivery} />
                            <div className="topic">{'Delivery'}</div>
                            <hr />
                            <ul className="subtopic">
                                <li><a href="#">Lorem ipsum</a></li>
                                <li><a href="#">Lorem ipsum</a></li>
                                <li><a href="#">Lorem ipsum</a></li>
                            </ul>
                            <div className="view-all"><a href="#">View All</a></div>
                        </Col>
                        <Col className="col-md-3 col-sm-12 col-12">
                            <img src={returns} />
                            <div className="topic">{'Returns'}</div>
                            <hr />
                            <ul className="subtopic">
                                <li><a href="#">Lorem ipsum</a></li>
                                <li><a href="#">Lorem ipsum</a></li>
                                <li><a href="#">Lorem ipsum</a></li>
                            </ul>
                            <div className="view-all"><a href="#">View All</a></div>
                        </Col>
                    </Row>
                    <Row className="faqs text-center mb-3 d-flex justify-content-center">
                        <Col className="col-md-3 col-sm-12 col-12">
                            <img src={genInfo} />
                            <div className="topic">{'General Information'}</div>
                            <hr />
                            <ul className="subtopic">
                                <li><a href="#">Lorem ipsum</a></li>
                                <li><a href="#">Lorem ipsum</a></li>
                                <li><a href="#">Lorem ipsum</a></li>
                            </ul>
                            <div className="view-all"><a href="#">View All</a></div>
                        </Col>
                        <Col className="col-md-3 col-sm-12 col-12">
                            <img src={userAcct} />
                            <div className="topic">{'User Account'}</div>
                            <hr />
                            <ul className="subtopic">
                                <li><a href="#">Lorem ipsum</a></li>
                                <li><a href="#">Lorem ipsum</a></li>
                                <li><a href="#">Lorem ipsum</a></li>
                            </ul>
                            <div className="view-all"><a href="#">View All</a></div>
                        </Col>
                        <Col className="col-md-3 col-sm-12 col-12">
                            <img src={itRepair} />
                            <div className="topic">{'IT/Troubleshoot'}</div>
                            <hr />
                            <ul className="subtopic">
                                <li><a href="#">Lorem ipsum</a></li>
                                <li><a href="#">Lorem ipsum</a></li>
                                <li><a href="#">Lorem ipsum</a></li>
                            </ul>
                            <div className="view-all"><a href="#">View All</a></div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            
        </>
    );
}

export default Faqs;