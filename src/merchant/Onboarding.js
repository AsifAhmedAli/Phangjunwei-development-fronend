import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import img1 from '../images/merchant/onboarding_img1.png';
import merch_bullet from '../images/merchant/merch_bullet_like.png';
import testimony from '../images/merchant/merch_testimony.png';
import cat1 from '../images/merchant/cat1.png';
import cat2 from '../images/merchant/cat2.png';
import cat3 from '../images/merchant/cat3.png';
import cat4 from '../images/merchant/cat4.png';
import cat5 from '../images/merchant/cat5.png';
import scan from '../images/merchant/scan.png';
import analytics from '../images/merchant/analytics.png';
import cartImg from '../images/merchant/cart.png';
import ceoProfile from '../images/merchant/merchant-ceo-profile.png';

function Onboarding() {
    return (
        <>
            <Row className="text-center merchant-onboarding-top">
                <Col className="text-center">
                    <div><img src={img1} /></div>
                    <div className="join">
                        <div className="title">JOIN BURROWS TODAY!</div>
                        <br />
                        <div className="text">Burrows aim to redefine the way furniture retailers engage homeowners.
                        We are here to drive growth as well as digital transformation for furniture retailers.
Join us in creating a unique, one-stop shopping experience today!</div>
                        <br />
                        <div>
                            <Button variant="secondary" className="btn-get-started-light">Get Started</Button>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="onboarding-group-benefits">
                <Col md={2}>&nbsp;</Col>
                <Col md={4} className="text-center">
                    <p className="wording">Empower and Grow
                    Your Business with
                    Burrows today!</p>
                </Col>
                <Col md={4}>
                    <div className="onboarding-benefit">
                        <img src={scan} alt="merch-bullet" className="merch-bullet" />
                        Furniture-focused Image Recognition Technology
that offers better accuracy, allowing customers to
shop quicker and less cart abandonment.
                    </div>
                    <div className="onboarding-benefit">
                        <img src={analytics} alt="merch-bullet" className="merch-bullet" />
                        Smart Merchant Dashboard providing customer
insights and trends to help boost business
capabilities.
                    </div>
                    <div className="onboarding-benefit">
                        <img src={cartImg} alt="merch-bullet" className="merch-bullet" />
                        Digital transformation enables companies to
streamline operations and is key to the future
of online shopping.
                    </div>
                </Col>
                <Col md={2}>&nbsp;</Col>
            </Row>
            <Row className="text-center merchant-testimony">
                <Col md={6} className="p-0">
                    <div className="message text-left">
                        “Lorem ipsum dolor sit amet. Qui
                        quod voluptate At deserunt
                        tempore sed impedit
                        voluptatibus. Lorem ipsum dolor
                        sit amet. Qui quod voluptate At
                        deserunt tempore”
                        <p>CEO - Company A</p>
                    </div>
                </Col>
                <Col md={6}>
                    <img src={ceoProfile} alt="ceo profile" />
                </Col>
            </Row>
            <div className="text-center merchant-category-title">CATEGORIES AVAILABLE</div>
            <Row className="onboarding-categories text-center">
                <Col md={1}>&nbsp;</Col>
                <Col md={2}>
                    <img src={cat1} alt="onboarding-category" />
                    <div className="cat-title">{'Bed & Bath'}</div>
                </Col>
                <Col md={2}>
                    <img src={cat2} alt="onboarding-category" />
                    <div className="cat-title">{'Furniture'}</div>
                </Col>
                <Col md={2}>
                    <img src={cat3} alt="onboarding-category" />
                    <div className="cat-title">{'Decor & Pillows'}</div>
                </Col>
                <Col md={2}>
                    <img src={cat4} alt="onboarding-category" />
                    <div className="cat-title">{'Rugs'}</div>
                </Col>
                <Col md={2}>
                    <img src={cat5} alt="onboarding-category" />
                    <div className="cat-title">{'Storage'}</div>
                </Col>
                <Col md={1}>&nbsp;</Col>
            </Row>
            <Row className="onboarding-categories text-center">
                <Col md={1}>&nbsp;</Col>
                <Col md={2}>
                    <img src={cat1} alt="onboarding-category" />
                    <div className="cat-title">{'Renovation'}</div>
                </Col>
                <Col md={2}>
                    <img src={cat2} alt="onboarding-category" />
                    <div className="cat-title">{'Outdoor'}</div>
                </Col>
                <Col md={2}>
                    <img src={cat3} alt="onboarding-category" />
                    <div className="cat-title">{'Kitchen'}</div>
                </Col>
                <Col md={2}>
                    <img src={cat4} alt="onboarding-category" />
                    <div className="cat-title">{'Baby & Kids'}</div>
                </Col>
                <Col md={2}>
                    <img src={cat5} alt="onboarding-category" />
                    <div className="cat-title">{'Lighting'}</div>
                </Col>
                <Col md={1}>&nbsp;</Col>
            </Row>
            <br />
            <Row className="onboarding-process">
                <Col md={2}>&nbsp;</Col>
                <Col md={3}>
                    <div className="title">HOW IT WORKS?</div>
                    <p><Button variant="dark" className="btn-get-started-dark">Get Started</Button></p>
                </Col>
                <Col md={6} className="process-flow">
                    <ol>
                        <li>
                            <strong>Easy Registration</strong>
                            <p>Click ‘Get Started’ and fill out our Registration Form to begin the process.</p>
                        </li>
                        <li><strong>Digitalization and Cataloging of Products</strong>
                            <p>Our Merchant Manager will connect with you and discuss further details for <a href="/product-photography">Product Photography</a> and catalogue details. </p>
                        </li>
                        <li><strong>Trackable Shipping</strong>
                            <p>Order Management and Shipping Services can be monitored through our <ins>Merchant Dashboard</ins>.</p>
                        </li>
                        <li><strong>Payments and Dashboard Management</strong>
                            <p>Payments will be wired over to you via secured channels and your detailed sales report generated on the Merchant
                            dashboard. Read about our <ins>Rate Card</ins> where we explain the fees and payments.</p>
                        </li>
                    </ol>
                </Col>
                <Col md={1}>&nbsp;</Col>
            </Row>
            <Row className="onboarding-faq">
                <Col md={1}>&nbsp;</Col>
                <Col className="faq-list text-center">
                    <div className="title">FREQUENTLY ASKED QUESTIONS</div>
                    <ol>
                        <li>
                            <p className="question">What are the fees required to join Burrows?</p>
                            <p>There are ZERO onboarding fees required to join Burrows and start selling today! The only fees required are
stated in our <ins>Rate Card</ins>.
                            </p>
                        </li>
                        <li>
                            <p className="question">Do we have to pay shipping and delivery?</p>
                            <p>Currently, we do not have shipping and delivery services available for our merchants. However in the future, 
we intend to work with suitable logistics providers as the main delivery channel to lower costs for our 
partnered merchants. 
                            </p>
                        </li>
                        <li>
                            <p className="question">How long is the onboarding process?</p>
                            <p>The onboarding process takes about 3-5 working days. During this process, Burrows will offer timely updates
to ensure transparency as well as accountability in our partnership. 
                            </p>
                        </li>
                        <li>
                            <p className="question">I have questions, who do I look for?</p>
                            <p>If you have questions or wish to arrange a meeting or call to find out more. You can contact Roger, our Head 
of Business Outreach via email roger@burrows.com.sg or direct message via (+65) 97586507.
                            </p>
                        </li>
                    </ol>
                </Col>
                <Col md={1}>&nbsp;</Col>
            </Row>
        </>
    );
}

export default Onboarding;