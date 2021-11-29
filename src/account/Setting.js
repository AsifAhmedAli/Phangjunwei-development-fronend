import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuickMenu from './QuickMenu';

function Setting() {
    return(
        <>
            <Row className="profile-quick-view">
                <QuickMenu selectedMenu="Settings" />
                <Col md={7} className="text-left purchase-history">
                    <div className="title">Settings</div>
                    
                </Col>
                <Col md={1}>&nbsp;</Col>
            </Row>
        </>
    );
}

export default Setting;