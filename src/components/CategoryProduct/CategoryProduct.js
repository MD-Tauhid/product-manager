import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const CategoryProduct = () => {
    const categoryProducts = useLoaderData();
    const products = categoryProducts.data.products;
    console.log(products)
    return (
        <Row xs={1} md={3} className="g-2 mx-3 my-5">
            {
                products.map(product => <Product key={product.id} product={product}></Product>)
                
            }
        </Row>
    );
};

export default CategoryProduct;