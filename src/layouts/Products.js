import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import ProductsNav from '../components/ProductsNav/ProductsNav';

const Products = () => {
    const allCategories = useLoaderData();
    const categories = allCategories.data;
    
    return (
        <div>
            <ProductsNav categories={categories}></ProductsNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Products;