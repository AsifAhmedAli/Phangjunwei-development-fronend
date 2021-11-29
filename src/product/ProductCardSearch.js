import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Heart, HeartFill, Plus } from 'react-bootstrap-icons';
import sample_prod_img from '../images/prod_img.png';
import Button from 'react-bootstrap/Button';

function ProductCardSearch({ popularTag, isWishlist, productName, productPrice, productCompany, productExtraInfo, }) {

    return (
        <>
            <div className="card product-cards-2">
                {popularTag === '' ? '' : <div className="popular-tag">{popularTag}</div>}
                <div className="card-wishlist">{isWishlist ? <HeartFill size={18} color="#FF8200" /> : <Heart size={18} color="#FF8200" />}</div>
                <div><img src={sample_prod_img} /></div>
                <div className="name text-left">{productName}</div>
                <div className="text-left tags-edit">
                {/*<div className="tags text-left">*/}
                    <span>{productCompany}</span>
                    <span>{productExtraInfo}</span>
                </div>
                <Row className="mt-3 m-0">
                    <Col className="price text-left p-0">{productPrice}</Col>
                    <Col className="prod-add-btn p-0 text-right"><Button variant="dark"><Plus size={24} /></Button></Col>
                </Row>
            </div>
        </>
    );
}

export default ProductCardSearch;