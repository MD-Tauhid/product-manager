import React from 'react';
import { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PopUp = () => {
    const {show, setShow, singleProduct} = useContext(AuthContext);
    const {name} = singleProduct;

    return (
        <div>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-lg"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Title: {name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-lg'>
                    <div>
                        <img className='img-fluid' src="https://m.media-amazon.com/images/G/31/Amazon-Global-Selling-IN/amazon_product_listing.JPG" alt="" />
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default PopUp;