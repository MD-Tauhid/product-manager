import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import AdminNav from '../adminPannel/AdminNav/AdminNav';
import SideBar from '../adminPannel/SideBar/SideBar';

const Admin = () => {
    return (
        <div>
            <AdminNav></AdminNav>
            <Row>
                <Col md={3}>
                    <SideBar></SideBar>
                </Col>
                <Col md={9}>
                    <Outlet></Outlet>
                </Col>
            </Row>
            
        </div>
    );
};

export default Admin;