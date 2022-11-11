import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className='position-absolute bottom-50'>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://www.marketing91.com/wp-content/uploads/2018/09/How-to-Sell-a-Product-with-Blogging-4.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className='position-absolute bottom-50'>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.makdigitaldesign.com/wp-content/uploads/2020/07/shopify-trending-products_50ecb5c4-fdc0-4057-8679-363bf8ba7604.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption className='position-absolute bottom-50 text-dark'>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;