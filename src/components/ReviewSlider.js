import { Star, StarFill } from "react-bootstrap-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ReviewSlider() {
    let settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        dots: true,
        infinite: true,
        initialSlide: 2,
    }
    return (
        <>
            <div className="page-info-break mt-4 row">
                <div className="col-12 d-flex justify-content-center">
                    <div className={"w-75 review-slider-wrapper"}>
                        <div className={"font-weight-bold text-center h4 p-5"}>Customer Reviews (8)</div>
                        <Slider {...settings} Style={"width:100%;"}>
                            <div>
                                <div className={"d-flex justify-content-center align-items-center"}>
                                    <div>
                                        <img src="https://via.placeholder.com/50" alt="" className={"rounded-circle d-inline"} />
                                        <span className={"ml-3"}>Customer Name</span>
                                    </div>
                                </div>
                                <div className={"d-flex justify-content-center align-items-center mt-3"}>
                                    <div>
                                        <StarFill size={22} className={"mr-2"} />
                                        <StarFill size={22} className={"mr-2"} />
                                        <StarFill size={22} className={"mr-2"} />
                                        <StarFill size={22} className={"mr-2"} />
                                        <Star size={22} className={"mr-2"} />
                                    </div>
                                </div>
                                <div className={"d-flex justify-content-center align-items-center mt-3"}>
                                    <div>
                                        <span className={"text-black-50"}>DD MM YYYY</span>
                                    </div>
                                </div>
                                <div className={"d-flex justify-content-center align-items-center mt-3"}>
                                    <p className={"text-center"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Ad alias, asperiores, at corporis
                                        harum incidunt iure laborum laudantium maxime nam nemo nisi officiis tenetur ut
                                        voluptates.
                                        harum incidunt iure laborum laudantium maxime nam nemo nisi officiis tenetur ut
                                        voluptates.
                                        harum incidunt iure laborum laudantium maxime nam nemo nisi officiis tenetur ut
                                        voluptates.
                                        harum incidunt iure laborum laudantium maxime nam nemo nisi officiis tenetur ut
                                        voluptates.
                                        Eligendi et placeat rerum.</p>
                                </div>
                            </div>
                            <div>
                                <div className={"d-flex justify-content-center align-items-center"}>
                                    <div>
                                        <img src="https://via.placeholder.com/50" alt="" className={"rounded-circle d-inline"} />
                                        <span className={"ml-3"}>Customer Name</span>
                                    </div>
                                </div>
                                <div className={"d-flex justify-content-center align-items-center mt-3"}>
                                    <div>
                                        <StarFill size={22} className={"mr-2"} />
                                        <StarFill size={22} className={"mr-2"} />
                                        <StarFill size={22} className={"mr-2"} />
                                        <StarFill size={22} className={"mr-2"} />
                                        <Star size={22} className={"mr-2"} />
                                    </div>
                                </div>
                                <div className={"d-flex justify-content-center align-items-center mt-3"}>
                                    <div>
                                        <span className={"text-black-50"}>DD MM YYYY</span>
                                    </div>
                                </div>
                                <div className={"d-flex justify-content-center align-items-center mt-3"}>
                                    <p className={"text-center"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Ad alias, asperiores, at corporis
                                        harum incidunt iure laborum laudantium maxime nam nemo nisi officiis tenetur ut
                                        voluptates.
                                        harum incidunt iure laborum laudantium maxime nam nemo nisi officiis tenetur ut
                                        voluptates.
                                        harum incidunt iure laborum laudantium maxime nam nemo nisi officiis tenetur ut
                                        voluptates.
                                        harum incidunt iure laborum laudantium maxime nam nemo nisi officiis tenetur ut
                                        voluptates.
                                        Eligendi et placeat rerum.</p>
                                </div>
                            </div>
                            <div>
                                <div className={"d-flex justify-content-center align-items-center"}>
                                    <div>
                                        <img src="https://via.placeholder.com/50" alt="" className={"rounded-circle d-inline"} />
                                        <span className={"ml-3"}>Customer Name</span>
                                    </div>
                                </div>
                                <div className={"d-flex justify-content-center align-items-center mt-3"}>
                                    <div>
                                        <StarFill size={22} className={"mr-2"} />
                                        <StarFill size={22} className={"mr-2"} />
                                        <StarFill size={22} className={"mr-2"} />
                                        <StarFill size={22} className={"mr-2"} />
                                        <Star size={22} className={"mr-2"} />
                                    </div>
                                </div>
                                <div className={"d-flex justify-content-center align-items-center mt-3"}>
                                    <div>
                                        <span className={"text-black-50"}>DD MM YYYY</span>
                                    </div>
                                </div>
                                <div className={"d-flex justify-content-center align-items-center mt-3"}>
                                    <p className={"text-center"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Ad alias, asperiores, at corporis
                                        harum incidunt iure laborum laudantium maxime nam nemo nisi officiis tenetur ut
                                        voluptates.
                                        harum incidunt iure laborum laudantium maxime nam nemo nisi officiis tenetur ut
                                        voluptates.
                                        harum incidunt iure laborum laudantium maxime nam nemo nisi officiis tenetur ut
                                        voluptates.
                                        harum incidunt iure laborum laudantium maxime nam nemo nisi officiis tenetur ut
                                        voluptates.
                                        Eligendi et placeat rerum.</p>
                                </div>
                            </div>
                        </Slider>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ReviewSlider;