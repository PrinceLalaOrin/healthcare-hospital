import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId} = useParams();
    
    const[serving, setServing] =useState({});
    console.log(serviceId)
    useEffect(()=>{
        fetch('https://princelalaorin.github.io/jsonapi/facilities.json')
        .then(res => res.json())
        .then(data =>{
         const products =(data?.find(pd =>pd.id == serviceId) )
         setServing(products)
        });
    }, [serviceId]);

    const {details, price,pic} = serving;
    console.log(serving)
    return (
        <div>
            <img src={pic} alt="" />
            <p>{details}</p>
            <h5>Price : {price}</h5>
            <Button variant="success">Buy Now</Button>
        </div>
    );
};

export default Booking;