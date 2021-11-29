import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import QuickMenu from './QuickMenu';
import ProductCard from "../product/ProductCard";


function Wishlist() {

    return (
        <>
            <Row className="profile-quick-view">
                <QuickMenu selectedMenu="Wishlist" />
                <Col md={9} xs={12} className="purchase-history wishlist-items">
                    <Row className="product-cards text-center justify-content-center">
                        <Col className={"col-12 col-md-4 p-0 d-flex justify-content-center"}>
                            <ProductCard popularTag="" isWishlist={false} productName="Chair"
                                                productPrice="$400" productCompany="Company AB" productExtraInfo="1 Color" />
                        </Col>
                        <Col className={"col-12 col-md-4 p-0 d-flex justify-content-center"}>
                            <ProductCard popularTag="" isWishlist={true} productName="Chair"
                                               productPrice="$1200" productCompany="Company AB" productExtraInfo="1 Color" />
                        </Col>
                        <Col className={"col-12 col-md-4 p-0 d-flex justify-content-center"}>
                            <ProductCard popularTag="" isWishlist={true} productName="Chair"
                                               productPrice="$1200" productCompany="Company AB" productExtraInfo="1 Color" />
                        </Col>

                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default Wishlist;
