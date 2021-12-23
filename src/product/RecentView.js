import ProductCard from '../product/ProductCard';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function RecentView({ customTitle }) {
    let settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
        dots: false,
        infinite: true,
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
                    slidesToShow: 5,
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
            <div className="page-product-list">
                <div className="section-title-1">{customTitle && customTitle ? customTitle : "Recently Viewed"}</div>
                <div className="product-cards text-center" id={"p-cards-slider"}>
                    <Slider {...settings}>

                        <div>
                            <ProductCard popularTag="Best Match" isWishlist={true} productName="Chair"
                                productPrice="$1200" productCompany="Company AB" productExtraInfo="1 Color" />
                        </div>
                        <div>
                            <ProductCard popularTag="Best Match" isWishlist={true} productName="Chair"
                                productPrice="$1200" productCompany="Company AB" productExtraInfo="1 Color" />
                        </div>
                        <div>
                            <ProductCard popularTag="Best Match" isWishlist={true} productName="Chair"
                                productPrice="$1200" productCompany="Company AB" productExtraInfo="1 Color" />
                        </div>
                        <div>
                            <ProductCard popularTag="Best Match" isWishlist={true} productName="Chair"
                                productPrice="$1200" productCompany="Company AB" productExtraInfo="1 Color" />
                        </div>
                        <div>
                            <ProductCard popularTag="Best Match" isWishlist={true} productName="Chair"
                                productPrice="$1200" productCompany="Company AB" productExtraInfo="1 Color" />
                        </div>
                        <div>
                            <ProductCard popularTag="Best Match" isWishlist={true} productName="Chair"
                                productPrice="$1200" productCompany="Company AB" productExtraInfo="1 Color" />
                        </div>

                    </Slider>
                </div>
            </div>
        </>
    );
}

export default RecentView;