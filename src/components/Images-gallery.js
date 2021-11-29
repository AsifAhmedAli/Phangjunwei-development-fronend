import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import inspire1 from '../images/inspire1.png';
import inspire2 from '../images/inspire2.png';
import inspire3 from '../images/inspire3.png';
import inspire4 from '../images/inspire4.png';
import inspire5 from '../images/inspire5.png';
import inspire6 from '../images/inspire6.png';
import inspire7 from '../images/inspire7.png';
import { Heart, HeartFill, Plus } from 'react-bootstrap-icons';
import {useState} from "react";


function Gallery() {
    const[col1, setCol1] = useState([inspire1, inspire2,inspire1])
    const[col2, setCol2] = useState([inspire3,inspire4,inspire5,inspire3,inspire4])
    const[col3, setCol3] = useState([inspire6,inspire7,inspire6])
    const [height, setHeight] = useState(60);
    return (
        <>
            <Row className="more-ideas text-center">
                <Col className={"d-flex  align-items-center flex-column p-0"}>
                    <div class='row more-ideas-image-gallery' style={{width:'100%',justifyItems:'center', overflow:'hidden', height:`${height}rem`}}>
                        <div className="inspire" style={{ width:'17.6875rem',     margin: '0 0.5rem'}}>
                            {col1.map((m,k)=>{
                                return(
                                    <div className={"inspire-header"} key={k}>
                                        <div className={"d-flex justify-content-between"}>
                                            <div className={"company-name"}>
                                                <img src="https://via.placeholder.com/50" alt=""/>
                                                <span>Company Name</span>
                                            </div>
                                            <div className={"company-likes"}>
                                                <HeartFill className='heart-simbol' color="#FF8200" />
                                                <span>xx Likes</span>
                                            </div>
                                        </div>
                                        <img src={m} alt={m}  style={{    width: '17.6875rem',height: '24rem'}}/>
                                    </div>
                                )
                            })}

                        </div >
                        <div className="inspire" style={{ width:'17.6875rem',  margin: '0 0.5rem'}}>
                            {col2.map((m,k)=>{
                                return(
                                    <div className={"inspire-header"} key={k}>
                                        <div className={"d-flex justify-content-between"}>
                                            <div className={"company-name"}>
                                                <img src="https://via.placeholder.com/50" alt=""/>
                                                <span>Company Name</span>
                                            </div>
                                            <div className={"company-likes"}>
                                                <HeartFill className='heart-simbol' color="#FF8200" />
                                                <span>xx Likes</span>
                                            </div>
                                        </div>
                                        <img src={m} alt={m} style={{width:'100%',height: '27.808988764044944vh'}} />
                                    </div>
                                )
                            })}

                        </div>
                        <div className="inspire" style={{ width:'17.6875rem',  margin: '0 0.5rem'}}>
                            {col3.map((m,k)=>{
                                return(
                                    <div className={"inspire-header"} key={k}>
                                        <div className={"d-flex justify-content-between"}>
                                            <div className={"company-name"}>
                                                <img src="https://via.placeholder.com/50" alt=""/>
                                                <span>Company Name</span>
                                            </div>
                                            <div className={"company-likes"}>
                                                <HeartFill className='heart-simbol' color="#FF8200" />
                                                <span>xx Likes</span>
                                            </div>
                                        </div>
                                        <img src={m} alt={m}  style={{    width: '17.6875rem',height: '24rem'}}/>
                                    </div>
                                )
                            })}

                        </div>
                        <div className="inspire" style={{width:'17.6875rem',  margin: '0 0.5rem'}}>
                            {col2.map((m,k)=>{
                                return(
                                    <div className={"inspire-header"} key={k}>
                                        <div className={"d-flex justify-content-between"}>
                                            <div className={"company-name"}>
                                                <img src="https://via.placeholder.com/50" alt=""/>
                                                <span>Company Name</span>
                                            </div>
                                            <div className={"company-likes"}>
                                                <HeartFill className='heart-simbol' color="#FF8200" />
                                                <span>xx Likes</span>
                                            </div>
                                        </div>
                                        <img src={m} alt={m} style={{width:'100%',height: '27.808988764044944vh'}} />

                                    </div>
                                )
                            })}

                        </div>

                    </div>

                    <Row className="text-center mb-3 mt-3">
                        <Col>
                            <Button variant="outline-secondary" onClick={()=>{
                                setHeight(height*2)
                                setCol1(col1.concat(col1))
                                setCol2(col2.concat(col2))
                                setCol3(col3.concat(col3))
                            }}>View more</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default Gallery;
