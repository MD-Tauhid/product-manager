import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const {registerUser} = useContext(AuthContext)
    const [validated, setValidated] = useState(false);

    const handleSubmit = async(event) =>{
        
        const form = event.target;
        if(form.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        const newUser = {
            name: form.name.value,
            email: form.email.value,
            password: form.password.value,
            confirm_password: form.confirm_password.value
        };
        console.log(newUser);
        
        if(form.checkValidity() !== false){
            event.preventDefault();
            const response = await registerUser(newUser);
            console.log("response register: ", response);
        }


    }

    return (
        <>
            <div className="header-part mt-5 mb-4">
                <div className="text-center">
                    <h2>Sign Up</h2>
                </div>
                <div className="clearfix"></div>
            </div>


            <Form
                noValidate
                validated='{this.state.validated}'
                onSubmit={handleSubmit}
                className='container'
            >
                <Card>
                    <Card.Body>
                        <div className="row">
                            <div className="col-6">
                                <Form.Group controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter Your Name"
                                        name="name"
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        Please give your name
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                            <div className="col-6">
                                <Form.Group controlId="email">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="Enter Email Address"
                                        name="email"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please give your valid email address
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <Form.Group controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Enter Password"
                                        name="password"
                                        minLength={8}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please give password
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                            <div className="col-6">
                                <Form.Group controlId="password_confirmation">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Enter Password Again"
                                        name="confirm_password"
                                        minLength={8}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please give confirm password
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                        </div>


                        <Button variant="success" type="submit">
                            Sign Up
                        </Button>
                    </Card.Body>
                </Card>
            </Form>

        </>
    );
};

export default Register;