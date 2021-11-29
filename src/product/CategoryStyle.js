import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
/**/ 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import style_1 from '../images/style_1.png';
import style_2 from '../images/style_2.png';
import style_3 from '../images/style_3.png';
/**/ 
import collect1 from '../images/merchant/collection_1.png';
import collect2 from '../images/merchant/collection_2.png';
import collect3 from '../images/merchant/collection_3.png';
import collect4 from '../images/merchant/collection_4.png';

// function CategoryStyle({title}) {
//     return (
//         <>
//             <Row className="page-info-break ">
//                 <Col>
//                     <div className="break-title">{title}</div>
//                     <div className="break-desc">Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt tempore sed impedit voluptatibus.</div>
//                     <Row className="text-center">
//                         <Col>&nbsp;</Col>
//                         <Col md={2}>
//                             <img src={collect1} />
//                             <p className="style-title">Fabric armchair</p>
//                             <p className="style-desc">Lorem ipsum dolor sit amet. Qui quod voluptate At</p>
//                         </Col>
//                         <Col md={2}>
//                             <img src={collect2} />
//                             <p className="style-title">Rattan armchair</p>
//                             <p className="style-desc">Lorem ipsum dolor sit amet. Qui quod voluptate At</p>
//                         </Col>
//                         <Col md={2}>
//                             <img src={collect3} />
//                             <p className="style-title">Lounge chair</p>
//                             <p className="style-desc">Lorem ipsum dolor sit amet. Qui quod voluptate At</p>
//                         </Col>
//                         <Col md={2}>
//                             <img src={collect4} />
//                             <p className="style-title">Leather armchair</p>
//                             <p className="style-desc">Lorem ipsum dolor sit amet. Qui quod voluptate At</p>
//                         </Col>
//                         <Col>&nbsp;</Col>
//                     </Row>
//                 </Col>
//             </Row>
//         </>
//     );
// }
// export default CategoryStyle;













const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

function CategoryStyle({ title, numbers }, props) {
    let settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        dots: true,
        infinite: true,
        initialSlide: 2,
        responsive: [
            {
                breakpoint: 2560,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    centerMode: true,
                    infinite: true,
                    initialSlide: 4,
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 1120,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 938,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 864,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    initialSlide: 0,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    initialSlide: 0,
                }
            },

        ]


    }
    return (
        <>
            <Row className="page-info-break ">
                <Col>
                    <div className="break-title-1 text-uppercase">{title}</div>
                    <div className="break-desc-1">Lorem ipsum dolor sit amet. At deserunt.</div>
                    <div className="text-center d-flex justify-content-center" id={"inspire-slider"}>

                        <Slider {...settings}>

                            <div>
                                <div className="carousel-card-everything">
                                    <div>
                                        <img src={"https://source.unsplash.com/random?3"} className="img-fluid" alt="" />
                                        <div className={"caption-wrapper"}>
                                            <p className="style-title mb-1">Fabric armchair</p>
                                            <p className="style-desc mb-0">Lorem ipsum dolor sit amet. Qui quod voluptate At</p>
                                            {numbers && <p className={"text-center mb-0 small text-muted"}>99 Products</p>}

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="carousel-card-everything">
                                    <div>
                                        <img src={"https://source.unsplash.com/random?2"} className="img-fluid" alt="" />
                                        <div className={"caption-wrapper"}>
                                            <p className="style-title mb-1">Fabric armchair</p>
                                            <p className="style-desc mb-0">Lorem ipsum dolor sit amet. Qui quod voluptate At</p>
                                            {numbers && <p className={"text-center mb-0 small text-muted"}>99 Products</p>}

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="carousel-card-everything">
                                    <div>
                                        <img src={"https://source.unsplash.com/random?1"} className="img-fluid" alt="" />
                                        <div className={"caption-wrapper"}>
                                            <p className="style-title mb-1">Fabric armchair</p>
                                            <p className="style-desc mb-0">Lorem ipsum dolor sit amet. Qui quod voluptate At</p>
                                            {numbers && <p className={"text-center mb-0 small text-muted"}>99 Products</p>}

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="carousel-card-everything">
                                    <div>
                                        <img src={"https://source.unsplash.com/random?3"} className="img-fluid" alt="" />
                                        <div className={"caption-wrapper"}>
                                            <p className="style-title mb-1">Fabric armchair</p>
                                            <p className="style-desc mb-0">Lorem ipsum dolor sit amet. Qui quod voluptate At</p>
                                            {numbers && <p className={"text-center mb-0 small text-muted"}>99 Products</p>}

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="carousel-card-everything">
                                    <div>
                                        <img src={"https://source.unsplash.com/random?2"} className="img-fluid" alt="" />
                                        <div className={"caption-wrapper"}>
                                            <p className="style-title mb-1">Fabric armchair</p>
                                            <p className="style-desc mb-0">Lorem ipsum dolor sit amet. Qui quod voluptate At</p>
                                            {numbers && <p className={"text-center mb-0 small text-muted"}>99 Products</p>}

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="carousel-card-everything">
                                    <div>
                                        <img src={"https://source.unsplash.com/random?1"} className="img-fluid" alt="" />
                                        <div className={"caption-wrapper"}>
                                            <p className="style-title mb-1">Fabric armchair</p>
                                            <p className="style-desc mb-0">Lorem ipsum dolor sit amet. Qui quod voluptate At</p>
                                            {numbers && <p className={"text-center mb-0 small text-muted"}>99 Products</p>}

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </Slider>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default CategoryStyle;