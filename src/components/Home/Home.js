import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import About1 from '../About1/About1';
import About2 from '../About2/About2';
import Categories from '../Categories/Categories';
import Slider from '../Slider/Slider';

const Home = () => {
    const products = useLoaderData();
    const singleProduct = products.data[0];
    const singleProduct2 = products.data[1];

    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch("https://art.emporia-bd.com/art_api/api/v1/art/category")
            .then(res => res.json())
            .then(data => setCategories(data.data))
    }, [])

    return (
        <div>
            <section>
                <Slider></Slider>
            </section>
            <section className='m-5'>
                <About1 singleProduct={singleProduct}></About1>
            </section>
            <section className='m-5'>
                <h2 className='text-center mb-3'>Categories</h2>
                <hr />
                <div className='d-flex justify-content-between'>
                    {
                        categories.map(category => <Categories key={category.id} category={category}></Categories>)
                    }
                </div>
            </section>
            <section className='m-5'>
                <About2 singleProduct2={singleProduct2}></About2>
            </section>
        </div>
    );
};

export default Home;