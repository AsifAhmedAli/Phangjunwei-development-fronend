import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'react-multi-carousel/lib/styles.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from '../images/banner2.png';
import { useQuery } from '@apollo/client';
import { GET_MERCHANT_PRODUCTS_STYLES } from '../graphql/queries';


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

function StyleInspire({ title }, props) {

    const { loading, error, data } = useQuery(GET_MERCHANT_PRODUCTS_STYLES, {
        variables: {
            id: 3
        }
    })

    const getImage = (style) => {
        console.log(style);
        switch (style) {
            case 'classic': return 'https://images.unsplash.com/photo-1583853310075-d90bc40f4655?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNsYXNzaWN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60';
            case 'modern': return 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bW9kZXJufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60';
            case 'minimal': return 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80';
            case 'vintage': return 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmludGFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60';
            default: return 'https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60';
        }
    }

    const styles = data?.merchantProducts;

    let settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        dots: true,
        infinite: false,
        initialSlide: 2,
        responsive: [
            {
                breakpoint: 2560,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
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
                breakpoint: 1310,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 945,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 864,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    initialSlide: 0,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    initialSlide: 0,
                }
            },
        ]

    }
    return (
        <>
            <Row className="page-info-break style_inspire">
                <Col className="page-info-break-inside">
                    <div className="title-style-inspire">
                        <div className='title-background-image-div break-title-1 '>
                            <img src={banner} className='title-background-image' />
                        </div>
                        <div className="break-title-1 text-uppercase title-with-banner ml-0">{title} </div>
                        <div className='title-background-image-div break-title-1 '>
                            <img src={banner} className='title-background-image' />
                        </div>
                    </div>
                    <div className="break-desc-1 title-two-underTheBanner ml-0">Lorem ipsum dolor sit amet. At deserunt.</div>
                    <div className="text-to-center d-flex justify-content-center inspire-slick" id={"inspire-slider"}>

                        {
                            loading ? <div>loading....</div> :
                                <Slider {...settings}>

                                    {styles?.map(item => (
                                        <div className='before-inspire-card'>
                                            <div className="carousel-card-everything inspire-image-div ">
                                                <div>
                                                    <img src={getImage(item.skuStyle.toLowerCase())} className="img-fluid" alt="loading..." />
                                                    <div className={"caption-wrapper"}>
                                                        <div className="style-title">{item.skuStyle}</div>
                                                        <p className="style-desc">Lorem ipsum dolor sit amet. Qui quod voluptate At</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>

                        }

                    </div>
                </Col>
            </Row>
        </>
    );
}

export default StyleInspire;
