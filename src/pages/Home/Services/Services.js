import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const[facilities, setFacilities] = useState([])
    useEffect( () => {
        fetch('./facilities.json')
        .then(res => res.json())
        .then(data => setFacilities(data));
        
    }, [])
    return (
       <div className="container-fluid">
            <div className=' row cards' id='services'>
            <h1>Our Services</h1>
           {
               facilities.map(facility => <Service key={facility.id} facility={facility}></Service>)
           }
        </div>
       </div>
    );
};

export default Services;