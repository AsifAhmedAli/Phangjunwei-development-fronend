import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import product_photo_bg from '../images/photography_bg.png';

function ProductPhotography() {

    return (
        <>
            <Row>
                <Col className="text-center m-0 p-0 merchant-photography">
                    <img src={product_photo_bg} />
                </Col>
            </Row>
            <Row className="merchant-photography">
                <Col className="merchant-photography-text">
                    <p>
                    Product photography is an essential process that helps to build the digital database of images for the collection of furniture offered in a catalogue. For furniture retailers that do not have a digital database of photos of their furniture, it is crucial to engage in professional product photography to allow for images of the furniture to be stored in a digital catalogue. This will become the stepping stone to digital transformation of the furniture business as it allows for easy setup for online marketplace platforms.
                    </p>
                    <p>
                    Burrows will be working closely with professional photography studios to conduct on-site product photography as we understand that some retailers might not have the necessary resources to shift the furniture to the studio itself to have the images taken. In addition, these photos are key to our Image Recognition technology as we improve the accuracy of searches through an in depth analysis of the elemental features of each piece of furniture that are listed.
                    </p>
                    <p>
                    The cost of product photography will be factored into the onboarding costs and it will be only be a one-time charge as we aim to curate the digital images of as many furniture as the furniture merchant can offer. These images will also be shared with the merchants themselves and Burrows will also assist in creating a digital deposit of images in their digitalization process.
                    </p>
                </Col>
            </Row>
        </>
    );
}

export default ProductPhotography;