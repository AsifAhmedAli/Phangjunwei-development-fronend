import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style_1 from '../images/style_1.png';
import style_2 from '../images/style_2.png';
import style_3 from '../images/style_3.png';
import { Collapse } from 'react-bootstrap';

function MiniDiscover({title}) {
    return (
        <>
            <Row className="cart-discover text-center ">
                <Col>
                    <div className="title text-left">{title}</div>
                    <Row className="text-center">
                        <Col md={3}>
                            <div className="tag">Popular</div>
                            <img src={style_1} />
                            <p className="product">Ravaror - Dining Table</p>
                            <p className="price">{'$299'}</p>
                        </Col>
                        <Col md={3}>
                            <div className="tag">Bestseller</div>
                            <img src={style_2} />
                            <p className="product">Eldbert - Swivel Chair</p>
                            <p className="price">{'$49.90'}</p>
                        </Col>
                        <Col md={3}>
                            <div className="tag">Sale</div>
                            <img src={style_3} />
                            <p className="product">Kivik - Two-seat Sofa</p>
                            <p className="price">{'$595'}&nbsp;<del>{'$695'}</del></p>
                        </Col>
                        <Col md={3}>
                            <div className="tag">Bestseller</div>
                            <img src={style_2} />
                            <p className="product">Eldbert - Swivel Chair</p>
                            <p className="price">{'$49.90'}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default MiniDiscover;