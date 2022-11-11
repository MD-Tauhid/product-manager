import React from 'react';
import { useContext } from 'react';
import { Card, Col } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import PopUp from '../PopUp/PopUp';

const Product = ({ product }) => {
    const {name, slug, description} = product;
    const {handleModal} = useContext(AuthContext);
    return (
        <Col>
            <Card onClick={()=> handleModal(product)}>
                <Card.Img variant="top" src="https://unctad.org/sites/default/files/inline-images/ccpb_workinggroup_productsafety_800x450.jpg" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Description: {description}
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer...
                    </Card.Text>
                    <Card.Text>
                        slug: {slug}
                    </Card.Text>
                </Card.Body>
            </Card>
            <PopUp product={product}></PopUp>
        </Col>
    );
};

export default Product;