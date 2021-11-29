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
import Gallery from "../components/Images-gallery";
import {useState} from "react";

function MoreIdea() {
    const buttons = ["Table", "Bedroom", "Shelves", "Dining", "Beds", "Mattresses", "Lightening", "Decor", "Kitchen"]
    const[current, setCurrent] = useState("bedroom")
    return (
        <>
            <Row className="page-info-break more-ideas-main-div more-ideas text-center">
                <Col className='p-0'>
                    <div className="break-title-3 ">More ideas and inspiration</div>
                    <div className="break-desc-3 ">Lorem ipsum dolor sit amet. Qui quod voluptate At deserunt tempore sed impedit voluptatibus.</div>
                    <div className="category-pill pl-3">
                        <ul className={"flex-small-pills"}>
                            {buttons.map((m, key) => {
                                return(
                                    <li onClick={()=>{setCurrent(m)}} className={current === m? "selected": ""} >
                                        <span Style={"cursor:pointer"}>{m}</span>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>
                    <Gallery data={current}/>

                </Col>
            </Row>
        </>
    );
}

export default MoreIdea;
