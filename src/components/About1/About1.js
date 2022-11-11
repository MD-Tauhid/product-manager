import React from 'react';
import { Image } from 'react-bootstrap';

const About1 = ({singleProduct}) => {
    const {name, thumbnail} = singleProduct;
    return (
        <div className='row g-0 bg-light'>
            <Image className='col-md-6 img-fluid my-auto' style={{height:"300px"}} src={`https://art.emporia-bd.com/art_api/public/files/product/${thumbnail}`}></Image>
            <div className='text-secondary col-md-6 p-4'>
                <h2 className='mb-4'>Title: {name}</h2>
                <h4 className='mb-4'>Sub Title</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae veritatis similique labore quaerat voluptas sequi. Quis explicabo culpa in provident doloribus laudantium nisi ducimus obcaecati adipisci, consequatur at sit voluptates?</p>
            </div>
        </div>
    );
};

export default About1;