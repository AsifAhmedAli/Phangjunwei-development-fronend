import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";

const Tag = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29">
        <g id="Group_1619" data-name="Group 1619" transform="translate(1968 1412)">
            <circle id="Ellipse_160" data-name="Ellipse 160" cx="14.5" cy="14.5" r="14.5"
                    transform="translate(-1968 -1412)" fill="#fff" opacity="0.9"/>
            <circle id="Ellipse_161" data-name="Ellipse 161" cx="8.5" cy="8.5" r="8.5"
                    transform="translate(-1962 -1406)" fill="#ff8200"/>
        </g>
    </svg>


}

function Discover({title}) {
    return (
        <>
            <Row className="page-info-break discover-section">
                <Col lg={6}  sm={12}  md={6}
                    className={" d-flex justify-content-center align-items-center order-md-0 order-1 discover-div"}>
                    <div>
                        <div className="discover-break-title">{title}</div>
                        <p style={{fontSize: '0.9rem'}} className='discover-paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium alias cum deserunt
                            dignissimos dolore dolorem et ex impedit ipsa labore numquam ratione rem, sequi similique
                            velit
                            veritatis voluptates! Temporibus.</p>
                        <a href="#" className={"btn btn-primary px-4 mb-2"}>View More</a>
                    </div>
                </Col>
                <Col lg={6} sm={12} md={6} className={" order-md-1 order-0"} id={"discover-bg"}>
                    <div className='first-tag'
                         // style={{position: 'absolute', top: '4vw', right: '19.3vw'}}
                    >
                        <Link to={"/product-details/test"}>
                        <Tag/>
                        </Link>
                    </div>
                    <div className='second-tag'
                         // style={{position: 'absolute', top: '5.6vw', right: '39.4vw'}}
                    >
                        <Link to={"/product-details/test"}>
                        <Tag/>
                        </Link>
                    </div>
                    <div  className='third-tag'
                          // style={{position: 'absolute', top: '13vw', right: '33.5vw'}}
                    >
                        <Link to={"/product-details/test"}>
                        <Tag/>
                        </Link>
                    </div>
                    <div className='fourth-tag'
                        // style={{position: 'absolute', top: '16.2vw', right: '13.6vw'}}
                    >
                        <Link to={"/product-details/test"}>
                        <Tag/>
                        </Link>
                    </div>
                    <br/>
                    <br/>
                </Col>
            </Row>
        </>
    );
}

export default Discover;
