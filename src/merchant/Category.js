import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import {Collapse} from "react-bootstrap";
import {useState} from "react";
import {ChevronDown} from "react-bootstrap-icons";

function Category() {
    const [cat, setCat] = useState(false)
    return (
        <>
            <Row>
                <Col>
                    <div className="text-left d-flex justify-content-between" onClick={() =>setCat(!cat)}
                         Style={"padding: 10px;border-bottom: 1px solid lightgrey;font-weight: bold;"}>
                        <span className={"btn btn-link text-decoration-none p-0 m-0 text-dark"}>Category</span>
                        <span><ChevronDown/></span>
                    </div>
                    <Collapse in={cat} className={"py-3"}>
                        <ul>
                            <li>
                                <Form.Group controlId="chkBox1">
                                    <Form.Check type="checkbox" label="Lorem Ipsum lorem" />
                                </Form.Group>
                            </li>
                            <li>
                                <Form.Group controlId="chkBox1">
                                    <Form.Check type="checkbox" label="Lorem Ipsum lorem" />
                                </Form.Group>
                            </li>
                            <li>
                                <Form.Group controlId="chkBox1">
                                    <Form.Check type="checkbox" label="Lorem Ipsum lorem" />
                                </Form.Group>
                            </li>
                            <li>
                                <Form.Group controlId="chkBox1">
                                    <Form.Check type="checkbox" label="Lorem Ipsum lorem" />
                                </Form.Group>
                            </li>
                        </ul>
                    </Collapse>
                </Col>
            </Row>
        </>
    );
}

export default Category;