import React, { useState } from 'react';
import { useEffect } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
    const [allCategories, setAllCategories] = useState([]);
    useEffect(() =>{
        fetch("https://art.emporia-bd.com/art_api/api/v1/art/category")
        .then(res => res.json())
        .then(data => setAllCategories(data.data))
    } ,[]);

    return (
        <div className='sticky-top'>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><Image src='/demo.png'></Image></Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '200px' }}
                            navbarScroll
                        >
                            <Nav.Link><Link to="/" className='text-decoration-none text-secondary'>Home</Link></Nav.Link>
                            <Nav.Link><Link to="/about" className='text-decoration-none text-secondary'>About</Link></Nav.Link>
                            <NavDropdown title="Product" id="navbarScrollingDropdown">
                                <NavDropdown.Item><Link to="/products" className='text-decoration-none text-secondary'>All Product</Link></NavDropdown.Item>
                                {
                                    allCategories.map(category => <NavDropdown.Item key={category.id}>
                                            <Link to={`/products/category/${category.id}`} className='text-decoration-none text-secondary'>{category.name}</Link>
                                        </NavDropdown.Item>)
                                }
                            </NavDropdown>
                            <Nav.Link><Link to="/contact" className='text-decoration-none text-secondary'>Contact</Link></Nav.Link>
                            <Nav.Link><Link to="/Profile" className='text-decoration-none text-secondary'>Profile</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default HeaderNav;