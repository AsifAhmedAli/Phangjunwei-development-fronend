import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import shop1 from '../images/shop1.png';
import shop2 from '../images/shop2.png';
import shop3 from '../images/shop3.png';
import Slider from "react-slick";
import style_1 from "../images/style_1.png";
import style_2 from "../images/style_2.png";
import style_3 from "../images/style_3.png";

function MerchantDiscoverCompanies({popularTag}) {
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
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    centerMode: false,
                    initialSlide: 2,
                }
            },

        ]
    }
    return (
        <>
            <Row className="page-info-break mt-5">
                <Col>
                    <div className="discover-break-title ">Discover the style</div>
                    <div className="pb-4">Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt tempore sed impedit volupatatibus.</div>
                    <div className="text-center d-flex justify-content-center" id={"inspire-slider"}>
                        {/*<Carousel*/}
                        {/*  swipeable={false}*/}
                        {/*  draggable={false}*/}
                        {/*  showDots={true}*/}
                        {/*  responsive={responsive}*/}
                        {/*  ssr={true} // means to render carousel on server-side.*/}
                        {/*  infinite={true}*/}
                        {/* // autoPlay={props.deviceType !== "mobile" ? true : false}*/}
                        {/*  autoPlaySpeed={1000}*/}
                        {/*  keyBoardControl={true}*/}
                        {/*  customTransition="all .5s"*/}
                        {/*  transitionDuration={500}*/}
                        {/*  containerClass="carousel-container"*/}
                        {/*  removeArrowOnDeviceType={["tablet", "mobile"]}*/}
                        {/*  deviceType={props.deviceType}*/}
                        {/*  dotListClass="custom-dot-list-style"*/}
                        {/*  itemClass="carousel-item-padding-40-px"*/}
                        {/*>*/}
                        <Slider {...settings}>

                            <div>
                                <div className="carousel-card-everything">

                                    <div>
                                        <img src={"https://source.unsplash.com/400x200?1"} className="img-fluid" alt=""/>
                                        <div className={"caption-wrapper"}>
                                            <p className="style-title">Contemporary</p>
                                            <p className="">Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="carousel-card-everything">
                                    <div>
                                        <img src={"https://source.unsplash.com/400x200?2"} className="img-fluid" alt=""/>
                                        <div className={"caption-wrapper"}>
                                            <p className="style-title">Modern</p>
                                            <p className="">Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="carousel-card-everything">
                                    <div>
                                        <img src={"https://source.unsplash.com/400x200?3"} className="img-fluid" alt=""/>
                                        <div className={"caption-wrapper"}>
                                            <p className="style-title">Industrial</p>
                                            <p className="">Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="carousel-card-everything">
                                    <div>
                                        <img src={"https://source.unsplash.com/400x200?4"} className="img-fluid" alt=""/>
                                        <div className={"caption-wrapper"}>
                                            <p className="style-title">Ravaror - Dining table</p>
                                            <p className="">Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="carousel-card-everything">
                                    <div>
                                        <img src={"https://source.unsplash.com/400x200?5"} className="img-fluid" alt=""/>
                                        <div className={"caption-wrapper"}>
                                            <p className="style-title">Eldbert - Swivel chair</p>
                                            <p className="">Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="carousel-card-everything">
                                    <div>
                                        <img src={"https://source.unsplash.com/400x200?6"} className="img-fluid" alt=""/>
                                        <div className={"caption-wrapper"}>
                                            <p className="style-title">Kivik - Two-seat sofa</p>
                                            <p className="">Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </Slider>
                        {/*</Carousel>*/}
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default MerchantDiscoverCompanies;
