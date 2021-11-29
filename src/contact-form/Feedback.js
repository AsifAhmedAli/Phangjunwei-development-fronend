import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Envelope, TelephoneInbound, LockFill, ShieldLockFill } from 'react-bootstrap-icons';
import { useState } from 'react';

function Feedback() {
    const [formTitle, setFormTitle] = useState('Complaint/Feedback:');
    const [formDesc, setFormDesc] = useState('Have something nice to say about the platform? Or was there an Issue that was mishandled? Fill up the form below and let us know about it!');
    const [isOrderID, setIsOrderID] = useState(false);

    const handleMenuClick = (e) => {
        if (e.target.id === 'feedback') {
            setFormTitle('Complaint/Feedback:');
            setFormDesc('Have something nice to say about the platform? Or was there an Issue that was mishandled? Fill up the form below and let us know about it!');
            setIsOrderID(false);
        } else {
            setFormTitle('Urgent Complaint:');
            setFormDesc('Dealing with a matter that requires immediate attention? Fill up the form below and your concerns will be escalated promptly.');
            setIsOrderID(true);
        }

        document.getElementById('feedback').classList.remove('active');
        document.getElementById('urgent').classList.remove('active');

        document.getElementById(e.target.id).classList.add('active');
    }

    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        let orderId='', emailSubject = 'Complaint/Feedback';

        if(isOrderID) {
            orderId = document.getElementById('form-orderid').value;
            emailSubject = 'Urgent Complaint';
        }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("fullname", document.getElementById('form-name').value);
        urlencoded.append("useremail", document.getElementById('form-email').value);
        urlencoded.append("subject", emailSubject);
        urlencoded.append("mobile", document.getElementById('form-mobile').value);
        urlencoded.append("message", document.getElementById('form-message').value);

        
        
        urlencoded.append("orderId", orderId);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("http://localhost:4242/send-contact-notification", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log('error', error)
            });
    }

    return (
        <>
            <Row className="mb-2">
                <Col md={4} className="contact-information">
                    <div className="title">Contact Us</div>
                    <div className="menu"><a href="#" className="active" id="feedback" onClick={handleMenuClick}>Complaint/Feedback</a></div>
                    <div className="menu urgent-menu"><a href="#" className="" id="urgent" onClick={handleMenuClick}>Urgent Complaint</a></div>

                    <div className="title">{'Help & Information'}</div>
                    <div className="menu"><Envelope size={16} />&nbsp;&nbsp;help@burrows.com</div>
                    <div className="menu"><TelephoneInbound size={16} />&nbsp;&nbsp;{'(+65) 9171 4355'}</div>
                </Col>
                <Col className="contact-form">
                    <div>
                        <p className="title">{formTitle}</p>
                        <span className="desc">{formDesc}</span>
                    </div>
                    <Form onSubmit={handleFeedbackSubmit}>
                        <Form.Group controlId="form-name">
                            <Form.Label srOnly>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>

                        <Form.Group controlId="form-email">
                            <Form.Label srOnly>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group controlId="form-mobile">
                            <Form.Label srOnly>Mobile No.</Form.Label>
                            <Form.Control type="text" placeholder="Mobile No." />
                        </Form.Group>
                        {isOrderID ?
                            (
                                <Form.Group controlId="form-orderid">
                                    <Form.Label srOnly>Order ID</Form.Label>
                                    <Form.Control type="text" placeholder="Order ID" />
                                </Form.Group>
                            )
                            :
                            ('')
                        }

                        <Form.Group controlId="form-message">
                            <Form.Label>Message&nbsp;<span className="asterisk-red">*</span></Form.Label>
                            <Form.Control as="textarea" rows={7} />
                        </Form.Group>

                        <Form.Group>
                            <Form.File id="contact-img" label="Upload file" />
                            <span className="warning">(Catalogue Format - .zip | Max.limit 15MB)</span>
                        </Form.Group>

                        <div className="text-center">
                            <Button variant="dark" className="btn-contact-submit" type="submit">Submit</Button>
                            <p className="warning"><ShieldLockFill size={20} color="#1D1D1C" />&nbsp;&nbsp;<span>Your information is confidential and will not be shared.</span></p>
                        </div>
                    </Form>
                </Col>
            </Row>
        </>
    );
}

export default Feedback;