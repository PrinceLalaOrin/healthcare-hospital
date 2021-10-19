import React from 'react';

import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const{pic, price, facility, minorpoint, id} = props.facility;
    return (
        <div className='col-md-4 mx-auto'>
         <Card style={{width:"90%", height:"95%"}} className='mt-5'>
        <Card.Img variant="top" src={pic} className='card-img-top mx-auto my-3 d-block' />
        <Card.Body style={{fontSize: 15}}>
          <Card.Title>Service : {facility}</Card.Title>
          <h4>Price : {price}</h4>
          <Card.Text>
            {minorpoint}
          </Card.Text>
         <Link to={`/booking/${id}`}> <Button variant="warning">Booking</Button></Link>
        </Card.Body>
        
      </Card>
        </div>
    );
};

export default Service;