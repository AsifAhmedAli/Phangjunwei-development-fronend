import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

import { Cart2, Heart, Gear, CreditCard, BookmarkStar } from 'react-bootstrap-icons';
import prof_pic from '../images/profile/profpic.png';

function QuickMenu({selectedMenu}) {
    const handleMenuClick = (e) => {
        let base_url = window.location.origin, pageUri = "/account/purchases";

        if(e.target.id === 'purchase') {
            pageUri = "/account/purchases";
        } else if(e.target.id === 'wishlist') {
            pageUri = "/account/wishlist";
        } else if(e.target.id === 'payment') {
            pageUri = "/account/payments";
        } else if(e.target.id === 'shop') {
            pageUri = "/account/shops";
        } else if(e.target.id === 'setting') {
            pageUri = "/account/settings";
        }

        window.location.replace(base_url + pageUri);
    }

    return (
        <>
            <Col md={4} xs={12} className="text-right">
                <Row className="text-center">
                    <Col>
                        <div><Image src="https://via.placeholder.com/150" roundedCircle /></div>
                        <div className="name">Customer A</div>
                        <div className="edit-action">Edit your profile</div>
                    </Col>
                </Row>
                <Row className="text-center mt-3">
                    <Col>
                        <ButtonGroup vertical className="quick-menu">
                            <Button variant="dark" id="purchase" className={selectedMenu === 'Purchase History'  ? "text-left btn-selected" : "text-left"} onClick={handleMenuClick}>
                                <Cart2 size={20} />&nbsp;&nbsp;Purchase History
                                    <div><small>12 Orders</small></div>
                            </Button>
                            <Button variant="secondary" id="wishlist" className={selectedMenu === 'Wishlist' ? "text-left btn-selected" : "text-left"} onClick={handleMenuClick}>
                                <Heart size={20} />&nbsp;&nbsp;Wishlist
                                    <div><small>Saved your favourites</small></div>
                            </Button>
                            <Button variant="secondary" id="payment" className={selectedMenu === 'Payment Methods' ? "text-left btn-selected" : "text-left"} onClick={handleMenuClick}>
                                <CreditCard size={20} />&nbsp;&nbsp;Payment Methods
                                    <div><small>Select Payment Method</small></div>
                            </Button>
                            <Button variant="secondary" id="shop" className={selectedMenu === 'Favourite Shop' ? "text-left btn-selected" : "text-left"} onClick={handleMenuClick}>
                                <BookmarkStar size={20} />&nbsp;&nbsp;Favourite Shop
                                    <div><small>8 Favourite Shop</small></div>
                            </Button>
                            <Button variant="secondary" id="setting" className={selectedMenu === 'Settings' ? "text-left btn-selected" : "text-left"} onClick={handleMenuClick}>
                                <Gear size={20} />&nbsp;&nbsp;Settings
                                    <div><small>Edit your Account Details</small></div>
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Col>
        </>
    );
}

export default QuickMenu;