import React from 'react';
import { Card } from 'react-bootstrap';

const Categories = ({category}) => {
    const {name, updated_at, description} = category;
    return (
        <Card className="text-light mx-1" style={{backgroundColor:"#3c4b64"}}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description} This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer...
                </Card.Text>
                <Card.Text>Last updated: {updated_at}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Categories;