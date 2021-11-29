import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { SquareFill, Envelope, TelephoneFill } from 'react-bootstrap-icons';
import footer_logo from '../images/burrows-footer-logo2.png';
import card_amex from '../images/card-amex.png';
import card_apple from '../images/card-applepay.png';
import card_google from '../images/card-googlepay.png';
import card_maestro from '../images/card-maestro.png';
import card_master from '../images/card-master.png';
import card_visa from '../images/card-visa.png';

import googlestore from '../images/app-googlepay.png';
import appstore from '../images/app-store.png';

import fb_logo from '../images/social-fb.png';
import ig_logo from '../images/social-ig.png';

function Footer() {
    return (
        <>
            <Row className="footer-group-row">
                <Col>
                    <Row className="footer-category-menu">
                        <Col>
                            <Row >

                                <Col md={2} className={"pt-4"}>
                                    <strong>Download Our App</strong>
                                    <div><img src={appstore} alt="apple" />&nbsp;&nbsp;<img src={googlestore} alt="google" /></div>
                                    <br/>
                                    <strong>Follow Us</strong>
                                    <div><img src={fb_logo} alt="facebook" />&nbsp;&nbsp;<img src={ig_logo} alt="instagram" /></div>
                                </Col>
                                <Col md={2}>
                                    <ul>
                                        <li>About Burrows </li>
                                        <li><a href="/">About Us</a></li>
                                        <li><a href="/contact-form">Contact Us</a></li>
                                        <li><a href="/">Burrows Team</a></li>
                                        <li><a href="/privacy">Privacy Policy</a></li>
                                        <li><a href="/merchant/merchantA">Burrows Merchants</a></li>
                                    </ul>
                                </Col>
                                <Col md={2}>
                                    <ul>
                                        <li>Partners</li>
                                        <li><a href="/merchant-onboarding">Partner With Us</a></li>
                                        <li><a href="#">Marketplace Policies</a></li>
                                        <li><a href="#">Bedside Tables</a></li>
                                        <li><a href="#">Login to Merchant Dashboard</a></li>
                                        <li><a href="#">Corporate Enquiries</a></li>
                                    </ul>
                                </Col>
                                <Col md={3}>
                                    <ul>
                                        <li>Contact Us</li>
                                        <li><Envelope size={14} />&nbsp;&nbsp;{' customercare@burrows.sg'}</li>
                                        <li><TelephoneFill size={14} />&nbsp;&nbsp;{' (+65) 1234 5678'}</li>
                                        <li>Monday-Saturday 10am-6pm (Except PH)</li>
                                    </ul>
                                </Col>
                                <Col md={3} className={"pt-4"}>
                                    <strong>We Accept</strong>
                                    <div><img src={card_visa} alt="card visa" />&nbsp;&nbsp;<img src={card_master} alt="card master" />&nbsp;&nbsp;<img src={card_maestro} alt="card maestro" /></div>
                                    <div><img src={card_apple} alt="apple pay" />&nbsp;&nbsp;<img src={card_google} alt="google pay" />&nbsp;&nbsp;<img src={card_amex} alt="card amex" /></div>
                                </Col>

                            </Row>
                            <Row className={"footer-category-menu-border"} >
                                <Col>
                                    <ul>
                                        <li>Bedroom</li>
                                        <li><a href="/category/Bed Frames">Bed Frames</a></li>
                                        <li><a href="/category/Mattresses">Mattresses</a></li>
                                        <li><a href="/category/Bedside Tables">Bedside Tables</a></li>
                                        <li><a href="/category/Bedroom Storage">Bedroom Storage</a></li>
                                        <li><a href="/category/Bedroom Accessories">Bedroom Accessories</a></li>
                                    </ul>
                                </Col>


                                <Col>
                                    <ul>
                                        <li>Living Room</li>
                                        <li><a href="/category/All Sofas">All Sofas</a></li>
                                        <li><a href="/category/Sectional Sofas">Sectional Sofas</a></li>
                                        <li><a href="/category/Sofas">Sofas</a></li>
                                        <li><a href="/category/2 Seater Sofas">2 Seater Sofas</a></li>
                                        <li><a href="/category/Armchairs">Armchairs</a></li>
                                    </ul>
                                </Col>

                                <Col>
                                    <ul>
                                        <li>Dining Room</li>
                                        <li><a href="/category/Dining Tables">Dining Tables</a></li>
                                        <li><a href="/category/Dining Chairs">Dining Chairs</a></li>
                                        <li><a href="/category/Dining Benches">Dining Benches</a></li>
                                        <li><a href="/category/Stool">{'Stool & Bar Stools'}</a></li>
                                    </ul>
                                </Col>

                                <Col>
                                    <ul>
                                        <li>Storage</li>
                                        <li><a href="/category/Cabinets">Cabinets</a></li>
                                        <li><a href="/category/Dressers">Dressers</a></li>
                                        <li><a href="/category/Shelves">Shelves</a></li>
                                        <li><a href="/category/TV Consoles">TV Consoles</a></li>
                                        <li><a href="/category/Console Tables">Console Tables</a></li>
                                    </ul>
                                </Col>

                                <Col>
                                    <ul>
                                        <li>Home Decor</li>
                                        <li><a href="/category/Rugs">Rugs</a></li>
                                        <li><a href="/category/Bean Bags">Bean Bags</a></li>
                                        <li><a href="/category/Cushions">Cushions</a></li>
                                        <li><a href="/category/Mirrors">Mirrors</a></li>
                                        <li><a href="/category/Tableware">Tableware</a></li>
                                    </ul>
                                </Col>
                                <Col>
                                    <ul>
                                        <li>Home Office</li>
                                        <li><a href="/category/Desks">Desks</a></li>
                                        <li><a href="/category/Office Storage">Office Storage</a></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="footer-menu">
                        <Col md={4}>
                            <div className="row menu-item">
                                <div className="m-0 p-0"><a href="/"><img src={footer_logo} alt="footer-logo" /></a></div>
                                <div className="text-left"><a href="#">Help Centre</a> <SquareFill size={3} className="footer-menu-separator" /></div>
                                <div className="text-left"><a href="/contact-form">Contact Us</a><SquareFill size={3} className="footer-menu-separator" /></div>
                                <div className="text-left"><a href="#">Terms</a><SquareFill size={3} className="footer-menu-separator" /></div>
                                <div className="text-left"><a href="/privacy">Privacy</a></div>
                            </div>
                        </Col>
                        <Col md={6}>&nbsp;</Col>
                        <Col md={2} className="text-right">
                            <Form.Control as="select" id="lang" className="">
                                <option>English</option>
                            </Form.Control>
                        </Col>
                    </Row>
                </Col>
            </Row>


            <Row className="footer text-center">
                <Col>&copy; 2021 Burrows</Col>
            </Row>
        </>
    );
}

export default Footer;