import React from 'react';
import { Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="sidebar py-4" style={{ backgroundColor: '#3c4b64', width: "100%", height: "100%" }}>

            <div className="sidebar-wrapper">
                <div className="logo d-flex align-items-center justify-content-start">

                </div>
                <div className='mb-2'>
                    <p><Link className='text-decoration-none text-light fs-4 px-3' to='/admin'>Dashboard</Link></p>
                </div>
                <div className='mb-2'>
                    <p><Link className='text-decoration-none text-light fs-4 px-3' to='/admin/login'>Login</Link></p>
                </div>
                <div className='mb-2'>
                    <p><Link className='text-decoration-none text-light fs-4 px-3' to='/admin/register'>Register</Link></p>
                </div>
                <div className='mb-2'>
                    <p><Link className='text-decoration-none text-light fs-4 px-3' to='/admin/forget-password'>Forget Password</Link></p>
                </div>
                <Nav className='d-flex flex-column'>
                    {
                        ["Category", "Sub-Category", "Product", "Post"].map(topic =>
                            <div className='mb-2'>
                                <h4 style={{ backgroundColor: "#3c4b64", color:"white", width:"100%", padding:"10px"}}>
                                    {topic}
                                </h4>

                                <div variant="dark">
                                    <p>
                                        <Link className='text-decoration-none text-light ps-4' to={`/admin/${topic}-insert`}>{topic} Insert</Link>
                                    </p>
                                    <p><Link className='text-decoration-none text-light ps-4' to={`/admin/${topic}-update`}>{topic} Update</Link></p>
                                    <p><Link className='text-decoration-none text-light ps-4' to={`/admin/${topic}-list`}>{topic} List</Link></p>
                                </div>
                            </div>
                        )
                    }
                </Nav>
            </div>
        </div>
    );
};

export default SideBar;