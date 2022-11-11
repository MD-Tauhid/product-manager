import React from 'react';
import { Link } from 'react-router-dom';

const ProductsNav = ({ categories }) => {
    
    return (
        <div className='d-flex'>
            <div className='ms-3'>
            <Link to="/products" className="btn btn-light px-5 rounded-pill shadow-sm"> All Products </Link>
            </div>
            {
                categories.map(category => <div key={category.id}>
                    <Link to={`/products/category/${category.id}`} className="btn btn-light px-5 rounded-pill shadow-sm"> {category.name} </Link>
                </div>)
            }
        </div>
    );
};

export default ProductsNav;