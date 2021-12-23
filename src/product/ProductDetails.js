import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Heart, HeartFill, ShareFill, ChevronDown} from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import StarRatings from 'react-star-ratings';
import Modal from 'react-bootstrap/Modal';

//gallery
import active_preview from '../images/products/1001/active_preview.png';
import dtl_img0 from '../images/products/1001/detail_img0.png';
import dtl_img1 from '../images/products/1001/detail_img1.png';
import dtl_img2 from '../images/products/1001/detail_img2.png';
import dtl_img3 from '../images/products/1001/detail_img3.png';
import dtl_img4 from '../images/products/1001/detail_img4.png';
import dtl_img5 from '../images/products/1001/detail_img5.png';

//icons
import like_icon from '../images/products/like_icon.png';
import gallery_icon1 from '../images/products/1001/gallery1_icon.png';
import gallery_icon2 from '../images/products/1001/gallery2_icon.png';
import gallery_icon3 from '../images/products/1001/gallery3_icon.png';
import gallery_icon4 from '../images/products/1001/gallery4_icon.png';
import gallery_icon5 from '../images/products/1001/gallery5_icon.png';

//colors
import color1 from '../images/products/1001/color1.png';
import color2 from '../images/products/1001/color2.png';
import color3 from '../images/products/1001/color3.png';
import {useState} from 'react';
import {Collapse} from "react-bootstrap";

function ProductDetails({fromModal}) {
    const [showReview, setShowReview] = useState(false);

    const openReviewSection = (e) => {
        setShowReview(true);
    };

    const closeReviewSection = (e) => {
        setShowReview(false);
    };
    const [details, setDetails] = useState(false)
    const [csr, setCsr] = useState(false)
    const [spcs, setSpcs] = useState(false)
    const [enq, setEnq] = useState(false)

    const [summary, setSumamry] = useState(false)
    const [dimension, setDimension] = useState(false)
    const [inWishlist, addToWishlist] = useState(false)
    const [selectedImg, setSelectedImg] = useState([color1, color2, color3])
    const [selected, setSelected] = useState(1)
    return (
        <>
            <Modal show={showReview} onHide={closeReviewSection} size="md"
                   aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title className="review-section-title" id="contained-modal-title-vcenter">Customer Reviews
                        (12)</Modal.Title>
                </Modal.Header>
                <Modal.Body className="review-details">
                    <Row>
                        <Col>Customer A&nbsp;&nbsp;-&nbsp;&nbsp;May 01, 2021</Col>
                    </Row>
                    <Row>
                        <Col>
                            <StarRatings
                                rating={4.5}
                                starRatedColor="black"
                                numberOfStars={5}
                                starDimension="11px"
                                starSpacing="3px"
                            />
                        </Col>
                    </Row>
                    <Row className="end-of-review">
                        <Col>
                            Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt tempore sed impedit
                            voluptatibus. Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt. Lorem
                            ipsum dolor sit amet. Qui quod voluptate At deserunt tempore sed impedit
                            voluptatibus. Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt lorem.
                        </Col>
                    </Row>

                    <Row>
                        <Col>Customer A&nbsp;&nbsp;-&nbsp;&nbsp;May 01, 2021</Col>
                    </Row>
                    <Row>
                        <Col>
                            <StarRatings
                                rating={4.5}
                                starRatedColor="black"
                                numberOfStars={5}
                                starDimension="11px"
                                starSpacing="3px"
                            />
                        </Col>
                    </Row>
                    <Row className="end-of-review">
                        <Col>
                            Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt tempore sed impedit
                            voluptatibus. Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt. Lorem
                            ipsum dolor sit amet. Qui quod voluptate At deserunt tempore sed impedit
                            voluptatibus. Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt lorem.
                        </Col>
                    </Row>

                    <Row>
                        <Col>Customer A&nbsp;&nbsp;-&nbsp;&nbsp;May 01, 2021</Col>
                    </Row>
                    <Row>
                        <Col>
                            <StarRatings
                                rating={4.5}
                                starRatedColor="black"
                                numberOfStars={5}
                                starDimension="11px"
                                starSpacing="3px"
                            />
                        </Col>
                    </Row>
                    <Row className="end-of-review">
                        <Col>
                            Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt tempore sed impedit
                            voluptatibus. Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt. Lorem
                            ipsum dolor sit amet. Qui quod voluptate At deserunt tempore sed impedit
                            voluptatibus. Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt lorem.
                        </Col>
                    </Row>

                    <Row>
                        <Col>Customer A&nbsp;&nbsp;-&nbsp;&nbsp;May 01, 2021</Col>
                    </Row>
                    <Row>
                        <Col>
                            <StarRatings
                                rating={4.5}
                                starRatedColor="black"
                                numberOfStars={5}
                                starDimension="11px"
                                starSpacing="3px"
                            />
                        </Col>
                    </Row>
                    <Row className="end-of-review">
                        <Col>
                            Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt tempore sed impedit
                            voluptatibus. Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt. Lorem
                            ipsum dolor sit amet. Qui quod voluptate At deserunt tempore sed impedit
                            voluptatibus. Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt lorem.
                        </Col>
                    </Row>

                    <Row>
                        <Col>Customer A&nbsp;&nbsp;-&nbsp;&nbsp;May 01, 2021</Col>
                    </Row>
                    <Row>
                        <Col>
                            <StarRatings
                                rating={4.5}
                                starRatedColor="black"
                                numberOfStars={5}
                                starDimension="11px"
                                starSpacing="3px"
                            />
                        </Col>
                    </Row>
                    <Row className="end-of-review">
                        <Col>
                            Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt tempore sed impedit
                            voluptatibus. Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt. Lorem
                            ipsum dolor sit amet. Qui quod voluptate At deserunt tempore sed impedit
                            voluptatibus. Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt lorem.
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>

            <Row className="text-center">
                <Col md={1}>&nbsp;</Col>
                <Col md={10} className="w-1200">
                    <Row>
                        <Col className="col-12 col-md-6">
                            <Row className="product-preview">
                                <Col>
                                    <div className="share"><ShareFill size={20} color="#A8A8A8"/></div>
                                    <div className="wishlist">
                                        <button style={{border: "none", background: "none"}} onClick={() => {
                                            //Add your server/ API logic here
                                            addToWishlist(!inWishlist)
                                            console.log("toggle wishlist.", inWishlist)
                                        }}>
                                            {inWishlist ? <HeartFill size={18} color="#FF8200"/> :
                                                <Heart size={18} color="#FF8200"/>}
                                        </button>
                                    </div>
                                    <div className="product-img-preview-box text-center">
                                        <img src={active_preview} className={"img-fluid"} alt="product-img"/></div>
                                </Col>
                            </Row>
                            <Row className="product-preview-icons">
                                <Col>
                                    <img src={gallery_icon1} alt="gallery-icon-1"/>{' '}
                                    <img src={gallery_icon2} alt="gallery-icon-2"/>{' '}
                                    <img src={gallery_icon3} alt="gallery-icon-3"/>{' '}
                                    <img src={gallery_icon4} alt="gallery-icon-4"/>{' '}
                                    <img src={gallery_icon5} alt="gallery-icon-5"/>
                                </Col>
                            </Row>
                        </Col><Col className="text-left product-preview-details col-12 col-md-6">
                        <Row className="section">
                            <Col className="title">Friheten</Col>
                            <Col className="price text-right">{'$1200'}</Col>
                        </Row>
                        <Row className="section">
                            <Col className="short-description">
                                <div>3-seat sofa-bed, Hylie Beige</div>
                                <div><small>From <a href="#">Company A</a></small></div>
                            </Col>
                        </Row>
                        <Row className="section design-preview">
                            <Col>
                                <div>Available designs</div>
                                <div>
                                    {selectedImg.map((m, k) => {
                                        return (
                                            <><img src={m} alt={m} className={k === selected ? "selected" : ""}
                                                   onClick={() => {
                                                       setSelected(k)
                                                   }}/>&nbsp;&nbsp;</>
                                        )
                                    })}
                                </div>
                            </Col>
                        </Row>
                        <Row className="text-center section social-actions">
                            <Col><img src={like_icon} alt="like-icon"/> Lorem ipsum</Col>
                            <Col><img src={like_icon} alt="like-icon"/> Lorem ipsum</Col>
                            <Col><img src={like_icon} alt="like-icon"/> Lorem ipsum</Col>
                        </Row>
                        {fromModal ? <>
                            <div className="text-left collapse-btn" onClick={() => setSumamry(!summary)}>Summary</div>
                            <Collapse in={summary}>
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cum cupiditate ex
                                    laborum mollitia non perferendis quam! Ab alias atque consequatur, delectus
                                    doloremque dolores itaque labore maiores necessitatibus nostrum repellendus!
                                </div>
                            </Collapse>

                            <div className="text-left collapse-btn"
                                 onClick={() => setDimension(!dimension)}>Dimensions
                            </div>
                            <Collapse in={dimension}>
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cum cupiditate ex
                                    laborum mollitia non perferendis quam! Ab alias atque consequatur, delectus
                                    doloremque dolores itaque labore maiores necessitatibus nostrum repellendus!
                                </div>
                            </Collapse>

                            <a href={"#"} className={"btn btn-primary btn-block orange-button"}>View Full Details</a>

                        </> : <>

                            <Row className="section quantity">
                                <Col md={2}>
                                    <Form.Label>Quantity</Form.Label>
                                </Col>
                                <Col md={2}>
                                    <Form.Control as="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Col>
                                <Col md={8}>&nbsp;</Col>
                            </Row>
                            <Row className="text-center section product-actions" Style={"border: 0;"}>
                                <Col>
                                    <Button variant="secondary" className="btn-add-cart">Add to Cart</Button>
                                    <Button variant="dark" className="btn-buy">Buy Now</Button>
                                </Col>
                            </Row>
                            <Row className="text-center section product-more-details">
                                <Col>
                                    <div className="text-left collapse-btn" onClick={() => setDetails(!details)}>Product
                                        Details
                                        <ChevronDown size={18} className={"text-right float-right mt-2"}/>
                                    </div>
                                    <Collapse in={details}>
                                        <div>
                                            <div className="text-left">Our beloved 3-Seat Sofa seating has a timeless
                                                design and wonderfully thick, comfy cushions.
                                                The covers are easy to change, so buy an extra
                                                cover - or two, and change according to mood or season.
                                            </div>
                                            <br/>
                                            <Row className="text-left">
                                                <Col>Brand</Col>
                                                <Col>Brand A</Col>
                                            </Row>
                                            <Row className="text-left">
                                                <Col>Dimensions</Col>
                                                <Col>W78 D96 H7.5 cm</Col>
                                            </Row>
                                            <Row className="text-left">
                                                <Col>Material</Col>
                                                <Col>Genuine Leather</Col>
                                            </Row>
                                            <Row className="text-left">
                                                <Col>Color</Col>
                                                <Col>Brown</Col>
                                            </Row>
                                            <Row className="text-left">
                                                <Col>Weight</Col>
                                                <Col>23kg</Col>
                                            </Row>
                                            <Row className="text-left">
                                                <Col>Care Instructions</Col>
                                                <Col>Wipe with dry cloth or
                                                    damp cloth and clean
                                                    only with products approved for leather.
                                                </Col>
                                            </Row>
                                            <div><img src={dtl_img0} alt="detail-img0"/></div>

                                            <div>Reversible back cushions filled with polyester
                                                fibres provide soft support for your back and two different sides to
                                                wear.
                                            </div>

                                            <div><img src={dtl_img1} alt="detail-img1"/></div>

                                            <div>Seat cushions filled with high resilience foam
                                                and polyester fibre wadding give comfortable
                                                support for your body, and easily regain their
                                                shape when you get up.
                                            </div>

                                            <div><img src={dtl_img2} alt="detail-img2"/></div>

                                            <div>The cover is easy to keep clean as it is removable and can be machine
                                                washed.
                                            </div>

                                            <div><img src={dtl_img3} alt="detail-img3"/></div>

                                            <div>This cover’s ability to resist abrasion has been
                                                tested to handle 15,000 cycles, which is suitable
                                                for furniture that should withstand everyday use
                                                in the home.
                                            </div>

                                            <div><img src={dtl_img4} alt="detail-img4"/></div>

                                            <div>A range of coordinated covers makes it easy for you to give your
                                                furniture a
                                                new look.
                                            </div>

                                            <div><img src={dtl_img5} alt="detail-img5"/></div>

                                            <div>The cover has a lightfastness level of 5 (the
                                                ability to resist colour fading) on a scale of 1 to
                                                8. According to industry standards, a
                                                lightfastness level of 4 or higher is suitable for home use.
                                            </div>
                                        </div>
                                    </Collapse>

                                    <div className="text-left collapse-btn" onClick={() => setSpcs(!spcs)}>Product
                                        Specifications
                                        <ChevronDown size={18} className={"text-right float-right mt-2"}/>
                                    </div>
                                    <Collapse in={spcs}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ab, at
                                            blanditiis consectetur corporis cumque debitis delectus deserunt dicta
                                            distinctio ducimus enim nemo nobis nostrum porro quas quasi sunt
                                            voluptatibus!</p>
                                    </Collapse>

                                    <div className="text-left collapse-btn" onClick={() => setCsr(!csr)}>Customer
                                        Reviews
                                        <ChevronDown size={18} className={"text-right float-right mt-2"}/>
                                    </div>
                                    <Collapse in={csr}>
                                        <Row className="text-left review-section">
                                            <Col>
                                                <Row>
                                                    <Col>Customer Reviews</Col>
                                                    <Col>
                                                        <Button variant="secondary btn-see-review"
                                                                onClick={openReviewSection}>See All</Button>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <StarRatings
                                                            rating={4.5}
                                                            starRatedColor="black"
                                                            numberOfStars={5}
                                                            starDimension="14px"
                                                            starSpacing="5px"
                                                        />
                                                        &nbsp;&nbsp;
                                                        {'4.5/5 (12 reviews)'}
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Collapse>

                                    <div className="text-left collapse-btn" onClick={() => setEnq(!enq)}>Any Enquiries?
                                        <ChevronDown size={18} className={"text-right float-right mt-2"}/>
                                    </div>
                                    <Collapse in={enq}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ab, at
                                            blanditiis consectetur corporis cumque debitis delectus deserunt dicta
                                            distinctio ducimus enim nemo nobis nostrum porro quas quasi sunt
                                            voluptatibus!</p>
                                    </Collapse>
                                </Col>
                            </Row>

                        </>}

                    </Col>
                    </Row>
                </Col>
                <Col md={1}>&nbsp;</Col>
            </Row>
        </>
    );
}

export default ProductDetails;