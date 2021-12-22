import ProductCard from '../product/ProductCard';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from '@apollo/client';
import { GET_USER_WISHLIST } from '../graphql/queries';

function RecentView({ customTitle }) {

    const { loading, error, data } = useQuery(GET_USER_WISHLIST, {
        variables: {
            id: 1 // User's id hardcoded for now
        }
    });
    const wishlistProducts = data && data.getUser.wishlists;

    let settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: false,
        dots: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 2560,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1086,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 815,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },

        ]
    }
    return (
        <div className="row RecentView">
            <div className="page-product-list col">
                <div className="section-title-two">{customTitle && customTitle ? customTitle : "RECENTLY VIEWED"}</div>
                {loading ?
                    <div>loading...</div> :
                    <div className="product-cards text-center recent-view-div" id={"p-cards-slider"}>
                        <Slider {...settings}>
                            {
                                wishlistProducts?.map(item => (
                                    <ProductCard popularTag={`${item.product.skuTag || ""}`} isWishlist={item.product.inWishlist} productName={item.product.skuName}
                                        productPrice={`${item.product.skuPrice1}`} productCompany={item.product.skuCompany || "AB Company"} productExtraInfo={item.product.skuColor || "No colors"} productDetails={item.product} />
                                ))
                            }
                        </Slider>
                    </div>
                }
            </div>
        </div>
    );
}

export default RecentView;
