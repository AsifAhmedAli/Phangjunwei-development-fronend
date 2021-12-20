import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//payment icon
import visa_card from '../images/card-visa2.png';
import amex_card from '../images/card-amex2.png';
import apple_card from '../images/card-applepay2.png';
import google_card from '../images/card-googlepay2.png';
import maestro_card from '../images/card-maestro2.png';
import master_card from '../images/card-master2.png';
import { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

function Shipping() {
    const [showFBLogout, setShowFBLogout] = useState(false);
    const [showGLogout, setShowGLogout] = useState(false);
    const [loginName, setLoginName] = useState('');

    const responseGoogle = (response) => {

        if (response.tokenId) {
            setShowGLogout(true);
            if (response.profileObj) {
                setLoginName(response.profileObj.givenName + ' ' + response.profileObj.familyName);
            }
        }
    }

    const googleLogout = (response) => {
        setShowGLogout(false);
    }

    const handlePayment = (e) => {
        e.preventDefault();
        /*let base_url = window.location.origin;
        alert('test: ' + base_url);
        
        window.location.replace(base_url + '/my-cart/payment');*/

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("quantity", "1");
        urlencoded.append("currency", "sgd");
        urlencoded.append("itemName", "Test Item1");
        urlencoded.append("orderAmt", "15000");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("http://localhost:4242/create-checkout-session", requestOptions)
            .then(response => response.text())
            .then(result => result)
            .catch(error => error);
    }

    const handleFBLogin = (e) => {
        window.FB.login(function (response) {
            if (response.status === 'connected') {
                window.FB.api('/me', function (res) {
                    //alert('Welcome back ' + res.name);
                    setLoginName(res.name);
                    setShowFBLogout(true);
                });
            } else {
                // The person is not logged into your webpage or we are unable to tell. 
                alert('Sig in failed.')
            }
        }, { scope: 'email' });
    }

    const handleFBLogout = (e) => {
        window.FB.logout(function (response) {
            setShowFBLogout(false);
        });
    }

    return (
        <>
            <Row className="my-cart-container">
                <Col md={2}>&nbsp;</Col>
                <Col md={5} className="mt-3">
                    <div className="title">Shipping Address</div>
                    <div className="text-center login-social">
                        {/*<div class="fb-login-button" data-width="" data-size="large" data-button-type="login_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div>*/}
                        {showFBLogout || showGLogout ? 'Welcome back, ' + loginName + ' ' :
                            (
                                <>
                                    <Button className="btn-fb" onClick={handleFBLogin}>Sign in with Facebook</Button>{' '}
                                    {/*<Button className="btn-gmail">Sign in with Gmail</Button>*/}
                                    <GoogleLogin
                                        clientId="787307888492-7l386c1lddgvgjafi2ag0vg2t0f8bm43.apps.googleusercontent.com"
                                        buttonText="Sign in with Gmail"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        isSignedIn={true}
                                    />
                                </>
                            )
                        }

                        {showFBLogout ? (<Button className="btn btn-dark" onClick={handleFBLogout}>Logout</Button>) : ''}
                        {showGLogout ?
                            (<GoogleLogout
                                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                buttonText="Logout"
                                onLogoutSuccess={googleLogout}
                            >
                            </GoogleLogout>
                            ) : ''
                        }
                    </div>
                    <Form id="form-shipping" className="shipping-form" action="http://localhost:4242/create-checkout-session" method="POST">
                        <div className="form-title">Or checkout as Guest</div>
                        <Form.Group controlId="form-firstname">
                            <Form.Label srOnly>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>

                        <Form.Group controlId="form-lastname">
                            <Form.Label srOnly>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>

                        <Form.Group controlId="form-email">
                            <Form.Label srOnly>First Name</Form.Label>
                            <Form.Control type="email" placeholder="Email Address" />
                        </Form.Group>

                        <Form.Group controlId="form-contact">
                            <Form.Label srOnly>Contact Number</Form.Label>
                            <Form.Control type="text" placeholder="Contact Number" />
                        </Form.Group>

                        <Form.Group controlId="form-firstname">
                            <Form.Label srOnly>Delivery Address</Form.Label>
                            <Form.Control type="text" placeholder="Delivery Address" />
                        </Form.Group>

                        <Form.Group controlId="form-ship-default">
                            <Form.Check type="checkbox" label="Set as default shipping address" className="input-check" />
                        </Form.Group>

                        <Button variant="dark" type="submit">Continue to payments</Button>
                    </Form>
                </Col>

                <Col md={3} className="mt-3">
                    <Row className="itemization">
                        <Col>
                            <div><strong>7 Items</strong></div>
                            <hr />
                            <Form>
                                <Form.Group as={Row} controlId="form-subtotal">
                                    <Form.Label column md="4">Sub-total</Form.Label>
                                    <Col md="8">
                                        <Form.Control className="text-right" plaintext readOnly value={'SGD $39.90'} />
                                    </Col>
                                </Form.Group>

                                <Form.Group controlId="form-delivery">
                                    <Form.Label>Delivery</Form.Label>
                                    <Form.Control as="select" disabled>
                                        <option>Standard Delivery ($10)</option>
                                        <option>LBC Express ($20)</option>
                                    </Form.Control>
                                </Form.Group>

                                <hr />
                                <Form.Group as={Row} controlId="form-total">
                                    <Form.Label column md="4">Total</Form.Label>
                                    <Col md="8">
                                        <Form.Control className="text-right" plaintext readOnly value={'SGD $49.90'} />
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Row className="pay-method text-center">
                        <Col>
                            <hr />
                            <div className="text-left"><strong>Payment Methods</strong></div>
                            <Row>
                                <Col md={2}><img src={visa_card} alt="visa-card" /></Col>
                                <Col md={2}><img src={master_card} alt="master-card" /></Col>
                                <Col md={2}><img src={maestro_card} alt="maestro-card" /></Col>
                                <Col md={2}><img src={apple_card} alt="apple-card" /></Col>
                                <Col md={2}><img src={google_card} alt="google-card" /></Col>
                                <Col md={2}><img src={amex_card} alt="amex-card" /></Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col md={2}>&nbsp;</Col>
            </Row>
        </>
    );
}

export default Shipping;