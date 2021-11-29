import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';

//images
import team_zoom from '../images/about_teamzoom.png';
import usr_profile from '../images/team_profile.png';
import social_fb from '../images/team_fb.png';
import social_lnkdin from '../images/team_linkedin.png';

function About() {

    useEffect(() => {
        document.getElementById('promo-strip').style.display = 'none';
    });

    return (
        <>
            <Row className="team-brand">
                <Col md={1}>&nbsp;</Col>
                <Col md={6}>
                    <div><img src={team_zoom} alt="team zoom" /></div>
                </Col>
                <Col md={4} className="text-center">
                    <div className="story">
                        <ul>
                            <li>- Team description</li>
                            <li>- History</li>
                        </ul>
                    </div>
                </Col>
                <Col md={1}>&nbsp;</Col>
            </Row>
            <Row className="team-brand-intro text-center">
                <Col>
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </Col>
            </Row>
            <Row className="team-profile text-center">
                <Col><img src={usr_profile} alt="team-user-profile" /></Col>
                <Col className="message">
                    <div className="text">
                        <div><strong>Daniel Koh (Co-Founder)</strong></div>
                        <p>
                            Lorem ipsum dolor sit amet. Qui quod
                            voluptate At deserunt tempore sed
                            impedit voluptatibus. Lorem ipsum dolor
                        </p>
                        <hr />
                        <img src={social_lnkdin} alt="linked-in" className="social" />{' '}<img src={social_fb} alt="linked-in" className="social" />
                    </div>
                </Col>
            </Row>
            <Row className="team-profile text-center">
                <Col className="message">
                    <div className="text">
                        <div><strong>Tan Hua Fong (Co-Founder)</strong></div>
                        <p>
                            Lorem ipsum dolor sit amet. Qui quod
                            voluptate At deserunt tempore sed
                            impedit voluptatibus. Lorem ipsum dolor
                        </p>
                        <hr />
                        <img src={social_lnkdin} alt="linked-in" className="social" />{' '}<img src={social_fb} alt="linked-in" className="social" />
                    </div>
                </Col>
                <Col><img src={usr_profile} alt="team-user-profile" /></Col>
            </Row>
            <Row className="team-profile text-center">
                <Col className="img-profile-style2"><img src={usr_profile} alt="team-user-profile" /></Col>
                <Col className="message message-clear">
                    <div className="text">
                        <div><strong>Roger Wang
                            (Head of Business
                            Outreach)</strong></div>
                        <p>
                            Lorem ipsum dolor sit amet. Qui quod
                            voluptate At deserunt tempore sed
                            impedit voluptatibus. Lorem ipsum dolor
                        </p>
                        <hr />
                        <img src={social_lnkdin} alt="linked-in" className="social" />{' '}<img src={social_fb} alt="linked-in" className="social" />
                    </div>
                </Col>
                <Col className="img-profile-style2"><img src={usr_profile} alt="team-user-profile" /></Col>
                <Col className="message message-clear">
                    <div className="text">
                        <div><strong>Hendrick Soh
                            (Head of Business
                            Development)</strong></div>
                        <p>
                            Lorem ipsum dolor sit amet. Qui quod
                            voluptate At deserunt tempore sed
                            impedit voluptatibus. Lorem ipsum dolor
                        </p>
                        <hr />
                        <img src={social_lnkdin} alt="linked-in" className="social" />{' '}<img src={social_fb} alt="linked-in" className="social" />
                    </div>
                </Col>
            </Row>
            <Row className="team-profile text-center">
                <Col className="message message-clear">
                    <div className="text">
                        <div><strong>Azri Masran
                            (Lead UI/UX Designer)</strong></div>
                        <p>
                            Lorem ipsum dolor sit amet. Qui quod
                            voluptate At deserunt tempore sed
                            impedit voluptatibus. Lorem ipsum dolor
                        </p>
                        <hr />
                        <img src={social_lnkdin} alt="linked-in" className="social" />{' '}<img src={social_fb} alt="linked-in" className="social" />
                    </div>
                </Col>
                <Col className="img-profile-style2"><img src={usr_profile} alt="team-user-profile" /></Col>
                <Col className="message message-clear">
                    <div className="text">
                        <div><strong>Herbert Fabillar
                            (Full Stack Developer )</strong></div>
                        <p>
                            Lorem ipsum dolor sit amet. Qui quod
                            voluptate At deserunt tempore sed
                            impedit voluptatibus. Lorem ipsum dolor
                        </p>
                        <hr />
                        <img src={social_lnkdin} alt="linked-in" className="social" />{' '}<img src={social_fb} alt="linked-in" className="social" />
                    </div>
                </Col>
                <Col className="img-profile-style2"><img src={usr_profile} alt="team-user-profile" /></Col>
            </Row>
            <Row className="team-profile text-center">
                <Col className="img-profile-style2"><img src={usr_profile} alt="team-user-profile" /></Col>
                <Col className="message message-clear">
                    <div className="text">
                        <div><strong>Nuran
                            (Tech Developer)</strong></div>
                        <p>
                            Lorem ipsum dolor sit amet. Qui quod
                            voluptate At deserunt tempore sed
                            impedit voluptatibus. Lorem ipsum dolor
                        </p>
                        <hr />
                        <img src={social_lnkdin} alt="linked-in" className="social" />{' '}<img src={social_fb} alt="linked-in" className="social" />
                    </div>
                </Col>
                <Col className="img-profile-style2"><img src={usr_profile} alt="team-user-profile" /></Col>
                <Col className="message message-clear">
                    <div className="text">
                        <div><strong>Arpan
                            (Tech Developer)</strong></div>
                        <p>
                            Lorem ipsum dolor sit amet. Qui quod
                            voluptate At deserunt tempore sed
                            impedit voluptatibus. Lorem ipsum dolor
                        </p>
                        <hr />
                        <img src={social_lnkdin} alt="linked-in" className="social" />{' '}<img src={social_fb} alt="linked-in" className="social" />
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default About;