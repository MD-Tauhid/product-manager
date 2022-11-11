import React from 'react';
import { Image } from 'react-bootstrap';

const About2 = ({singleProduct2}) => {
    const {name, thumbnail} = singleProduct2;
    return (
        <div className='row g-0 my-4 bg-light'>
            <div className='text-secondary col-md-6 p-4'>
                <h2 className='mb-4'>Title: {name}</h2>
                <h4 className='mb-4'>Sub Title</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ea quo officiis delectus dolore aliquid accusantium maxime eligendi nemo ipsam, ex, recusandae, unde voluptas voluptatem architecto! Itaque sunt expedita, illum tempora nostrum amet, necessitatibus qui ipsam accusamus dignissimos, earum culpa!</p>
            </div>
            <Image className='col-md-6 img-fluid my-auto' style={{height:"300px"}} src={`https://art.emporia-bd.com/art_api/public/files/product/${thumbnail}`}></Image>
        </div>
    );
};

export default About2;