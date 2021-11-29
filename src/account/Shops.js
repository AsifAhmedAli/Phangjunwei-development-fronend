import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuickMenu from './QuickMenu';

function Shops() {
    return(
        <>
           <Row className="profile-quick-view">
                <QuickMenu selectedMenu="Favourite Shop" />
                <Col md={7} className="text-left purchase-history">
                    <div className="title">Favourite Shop</div>
                    
                </Col>
                <Col md={1}>&nbsp;</Col>
            </Row>
        </>
    );
}

export default Shops;