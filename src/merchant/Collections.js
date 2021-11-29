import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import collect1 from '../images/merchant/collection_1.png';
import collect2 from '../images/merchant/collection_2.png';
import collect3 from '../images/merchant/collection_3.png';
import collect4 from '../images/merchant/collection_4.png';
import Slider from "react-slick";

function Collections({title}) {
    let settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        dots: true,
        infinite: true,
        initialSlide: 2,
        responsive: [
            {breakpoint: 2560,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    centerMode: true,
                    infinite: true,
                    initialSlide: 4,
                }
            },
            {breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            {breakpoint: 1120,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
            {breakpoint: 938,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
            {breakpoint: 864,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    initialSlide: 0,
                }
            },
            {breakpoint: 375,
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
            <Row className="page-info-break text-center">
                <Col>
                    <div className="break-title">{title}</div>
                    <div className="break-desc">Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt tempore sed impedit voluptatibus....</div>
                    <div className="text-to-center d-flex justify-content-center" id={"merchant-slider"}>

                        <Slider {...settings}>

                            {/* add in a new classname instead of before-inspire and inspire-image-div */}
                            <div className="before-inspire-card">
                                <div className="carousel-card-everything inspire-image-div">
                                    <div>
                                        <img src={"https://source.unsplash.com/random?3"} className="img-fluid" alt=""/>
                                        <div className={"caption-wrapper"}>
                                            <div className="style-title">HardWood</div>
                                            <p className="style-desc">Lorem ipsum dolor sit amet. Qui quod voluptate At</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="before-inspire-card">
                                <div className="carousel-card-everything inspire-image-div">
                                    <div>
                                        <img src={"https://source.unsplash.com/random?2"} className="img-fluid" alt=""/>
                                        <div className={"caption-wrapper"}>
                                            <div className="style-title">Kitchen</div>
                                            <p className="style-desc">Lorem ipsum dolor sit amet. Qui quod voluptate At</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="before-inspire-card">
                                <div className="carousel-card-everything inspire-image-div">
                                    <div>
                                        <img src={"https://source.unsplash.com/random?1"} className="img-fluid" alt=""/>
                                        <div className={"caption-wrapper"}>
                                            <div className="style-title">White</div>
                                            <p className="style-desc">Lorem ipsum dolor sit amet. Qui quod voluptate At</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="before-inspire-card">
                                <div className="carousel-card-everything inspire-image-div">
                                    <div>
                                        <img src={"https://source.unsplash.com/random?3"} className="img-fluid" alt=""/>
                                        <div className={"caption-wrapper"}>
                                            <div className="style-title">Contemporary</div>
                                            <p className="style-desc">Lorem ipsum dolor sit amet. Qui quod voluptate At</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="before-inspire-card"> 
                                <div className="carousel-card-everything inspire-image-div">
                                    <div>
                                        <img src={"https://source.unsplash.com/random?2"} className="img-fluid" alt=""/>
                                        <div className={"caption-wrapper"}>
                                            <div className="style-title">Modern</div>
                                            <p className="style-desc">Lorem ipsum dolor sit amet. Qui quod voluptate At</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="before-inspire-card">
                                <div className="carousel-card-everything inspire-image-div">
                                    <div>
                                        <img src={"https://source.unsplash.com/random?1"} className="img-fluid" alt=""/>
                                        <div className={"caption-wrapper"}>
                                            <div className="style-title">Industrial</div>
                                            <p className="style-desc">Lorem ipsum dolor sit amet. Qui quod voluptate At</p>
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

export default Collections;