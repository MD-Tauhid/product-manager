import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";


const Footer = () => {
    return (
        <footer className="footer px-0 px-lg-3 text-light" style={{ backgroundColor: "#3c4b64", padding: "10px" }}>
            <Container fluid>
                <nav>
                    <Row className='py-4'>
                        <Col xs={6} md={3}>
                            <Col md={4} className="d-flex flex-column justify-content-center">
                                <h6>Usefull Links</h6>
                                <Link className='text-decoration-none text-light fs-6 mb-2' to={'/'}>
                                    Home
                                </Link>
                                <Link className='text-decoration-none text-light fs-6 mb-2' to='/about'>
                                    About
                                </Link>
                                <Link className='text-decoration-none text-light fs-6 mb-2' to='/profile'>
                                    Profile
                                </Link>
                                <Link className='text-decoration-none text-light fs-6 mb-2' to='/contact'>
                                    Contact
                                </Link>
                            </Col>
                        </Col>
                        <Col xs={6} md={3}>
                            <p>Address: Gulshan, Dhaka-1212</p>
                            <p>Phone: +88</p>
                            <p>Email: mail@gmail.com</p>
                            <div className='d-flex'>
                                <Link className='text-decoration-none text-light fs-4 me-4'>
                                    <BsFacebook />
                                </Link>
                                <Link className='text-decoration-none text-light fs-4 me-4'>
                                    <BsInstagram />
                                </Link>
                                <Link className='text-decoration-none text-light fs-4 me-4'>
                                    <FaTwitter />
                                </Link>
                                <Link className='text-decoration-none text-light fs-4 me-4'>
                                    <ImLinkedin />
                                </Link>
                                <Link className='text-decoration-none text-light fs-4 me-4'>
                                    <BsYoutube />
                                </Link>
                            </div>
                        </Col>
                        <Col xs={12} md={6} className="text-center mt-4">
                            <p className='fs-4'>NEWSTELLER</p>
                            <Form>
                                <Form.Control className='w-50 mx-auto mb-4' type="email" placeholder="Enter email" style={{ backgroundColor: '#3c4b64' }} />
                                <Button className='rounded-pill px-4 border-light' style={{ backgroundColor: '#3c4b64' }} type="submit" onClick={(e) => e.preventDefault()}>
                                    SUBDCRIBE NOW
                                </Button>
                            </Form>
                        </Col>

                    </Row>
                </nav>
            </Container>
        </footer>
    );
};

export default Footer;