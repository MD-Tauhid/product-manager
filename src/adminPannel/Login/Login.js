import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className="header-part">
                <div className="text-center">
                    <h2>Sign In</h2>
                </div>
                <div className="clearfix"></div>
            </div>

            <Form noValidate>
                <div className="row justify-content-center">
                    <div className="col-8">
                        <Card>
                            <Card.Body>
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
                                <Button className='mt-4' variant="success" type="submit" block>
                                    Sign In
                                </Button>
                                <Link to='/admin/register' className='text-decoration-none d-block my-3'>New user? Please Register</Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Form>
        </>
    );
};

export default Login;