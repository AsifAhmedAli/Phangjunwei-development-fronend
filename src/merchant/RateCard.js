import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//images
import rate_brand from '../images/merchant/rate_brand-logo.png';
import silver_tier from '../images/merchant/sofa_silver.png';
import gold_tier from '../images/merchant/sofa_gold.png';
import plat_tier from '../images/merchant/sofa_plat.png';
import handshake from '../images/merchant/handshake.png';
import verified from '../images/merchant/verified.png';
import support from '../images/merchant/support.png';
import analytic from '../images/merchant/analytic.png';
import shipping from '../images/merchant/shipping.png';

function RateCard() {
    return (
        <>
            <Row className="rate-page text-center">
                <Col>
                    <div className="title">Merchant Rate Card</div>
                    <div className="subtitle">Updated as of 08 June 2021</div>
                </Col>
            </Row>
            <Row className="rate-page-tier-container">
                <Col md={2}>&nbsp;</Col>
                <Col className="container-rate">
                    <Row className="brand">
                        <Col md={1}>&nbsp;</Col>
                        <Col md={5} className="text-left"><img src={rate_brand} alt="rate-card brand logo" /></Col>
                        <Col md={5} className="text-right">Contact us at 9171 4355</Col>
                        <Col md={1}>&nbsp;</Col>
                    </Row>
                    <Row className="text-center">
                        <Col>
                            <div className="title">Commission rates per category</div>
                            <div className="subtitle">{'No registration fee & listing fee!'}</div>
                            <div className="subtitle-2">{'These fees apply when the sale occurs.'}</div>
                        </Col>
                    </Row>
                    <Row className="merchant-tier text-center">
                        <Col>
                            <Row className="level text-left">
                                <Col md={8}>
                                    <div className="item level-name">Silver</div>
                                    <div className="item"><strong>{'6% '}</strong>{'per transaction'}</div>
                                    <div className="item">
                                        {'Up to '} <strong>{'$1000'}</strong> {' in revenue'}
                                    </div>
                                </Col>
                                <Col md={4} className="text-center">
                                    <div className="item"><img src={silver_tier} /></div>
                                    <div className="item">&nbsp;</div>
                                    <div className="item">{'/ Month'}</div>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="level text-left">
                                <Col md={8}>
                                    <div className="item level-name">Gold</div>
                                    <div className="item"><strong>{'5% '}</strong>{'per transaction'}</div>
                                    <div className="item">
                                        {'Up to '} <strong>{'$2500'}</strong> {' in revenue'}
                                    </div>
                                </Col>
                                <Col md={4} className="text-center">
                                    <div className="item"><img src={gold_tier} /></div>
                                    <div className="item">&nbsp;</div>
                                    <div className="item">{'/ Month'}</div>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="level text-left">
                                <Col md={8}>
                                    <div className="item level-name">Platinum</div>
                                    <div className="item"><strong>{'4% '}</strong>{'per transaction'}</div>
                                    <div className="item">
                                        {'Up to '} <strong>{'$5000'}</strong> {' in revenue'}
                                    </div>
                                </Col>
                                <Col md={4} className="text-center">
                                    <div className="item"><img src={plat_tier} /></div>
                                    <div className="item">&nbsp;</div>
                                    <div className="item">{'/ Month'}</div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="merchant-tier-additional-info text-center">
                        <Col md={1}>&nbsp;</Col>
                        <Col className="info">
                            <Row>
                                <Col md={2} className="text-right mt-2"><img src={handshake} alt="handshake" /></Col>
                                <Col md={10} className="text-left">
                                    <div className="title">Onboarding</div>
                                    <div className="subtitle">Plan, develop and launch your online store on Burrows with the support of our team.</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2} className="text-right mt-2"><img src={verified} alt="verified" /></Col>
                                <Col md={10} className="text-left">
                                    <div className="title">Security</div>
                                    <div className="subtitle">Burrows marketplace is safeguarded with advanced web protection features and annual 
security audits.</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2} className="text-right mt-2"><img src={shipping} alt="shipping" /></Col>
                                <Col md={10} className="text-left">
                                    <div className="title">Order Management</div>
                                    <div className="subtitle">Burrows employs an efficient and flexible order management software that enables us to 
meet modern buyer expectations and increase customer retention.</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2} className="text-right mt-2"><img src={support} alt="support" /></Col>
                                <Col md={10} className="text-left">
                                    <div className="title">Online Support</div>
                                    <div className="subtitle">Communicate directly with an expert solutions partner dedicated to your account.</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2} className="text-right mt-2"><img src={analytic} alt="analytics" /></Col>
                                <Col md={10} className="text-left">
                                    <div className="title">Analytics</div>
                                    <div className="subtitle">Get analysis and insights of your products to make more informed business decisions.</div>
                                </Col>
                            </Row>
                            
                        </Col>
                        <Col md={1}>&nbsp;</Col>
                    </Row>
                </Col>
                <Col md={2}>&nbsp;</Col>
            </Row>
        </>
    );
}

export default RateCard;