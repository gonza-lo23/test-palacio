import React from 'react';

import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
//la card

export default function Item({item}) {


    return (
        <div>
            <Card style={{display:'flex', justifyContent:'space-evenly', width: '18rem' }}>
  <Card.Img variant="top" src={item.image} />
  <Card.Body>
    <Card.Title>{item.title}</Card.Title>
    <Card.Text>{item.description}
    {item.price}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
       
        <Link to={`/item/${item.id}`}>Link al item</Link>
        </div>
    )
};
