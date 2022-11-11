import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";
import { Button, Col, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';

const Contact = () => {
    const validateForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;
        event.target.reset();
        console.log(name, email, subject, message);
    }
    return (
        <div>
            <section class="m-5">

                <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                <p class="w-responsive mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>

                <div class="map">
                    <iframe title='Contact_Map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style={{width:"100%", height:"50vh"}} allowfullscreen></iframe>
                </div>

                <Row>
                    <Col md={9} class="col-md-9 mb-md-0 mb-5">
                        <Form onSubmit={validateForm} id="contact-form" name="contact-form" action="mail.php" method="POST">

                            <Row className='mt-4'>

                                <Col md={6}>
                                    <FormGroup class="md-form mb-0">
                                        <FormControl type="text" id="name" name="name" class="form-control" required />
                                        <FormLabel for="name" class="">Your name</FormLabel>
                                    </FormGroup>
                                </Col>

                                <Col md={6}>
                                    <FormGroup class="md-form mb-0">
                                        <FormControl type="text" id="email" name="email" class="form-control" required />
                                        <FormLabel for="email" class="">Your email</FormLabel>
                                    </FormGroup>
                                </Col>

                            </Row>

                            <Row className='mt-4'>
                                <Col md={12}>
                                    <FormGroup class="md-form mb-0">
                                        <FormControl type="text" id="subject" name="subject" class="form-control" required />
                                        <FormLabel for="subject" class="">Subject</FormLabel>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row className='mt-4'>
                                <Col md={12}>

                                    <FormGroup class="md-form">
                                        <FormControl as="textarea" id="message" name="message" rows="2" class="form-control md-textarea" required></FormControl>
                                        <FormLabel for="message">Your message</FormLabel>
                                    </FormGroup>

                                </Col>
                            </Row>
                            <div class="text-md-left">
                                <Button type='submit' class="btn btn-primary">Send</Button>
                            </div>
                            <div class="status"></div>
                        </Form>


                    </Col>

                    <Col md={3} class="text-center">
                        <ul class="list-unstyled mb-0">
                            <li><FaMapMarker className='fs-4' />
                                <p>San Francisco, CA 94126, USA</p>
                            </li>

                            <li><FaPhone className='fs-4' />
                                <p>+ 01 234 567 89</p>
                            </li>

                            <li><FaEnvelope className='fs-4' />
                                <p>contact@mdbootstrap.com</p>
                            </li>
                        </ul>
                    </Col>

                </Row>

            </section>
        </div>
    );
};

export default Contact;