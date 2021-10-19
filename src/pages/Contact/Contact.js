import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faEnvelopeSquare, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

import './Contact.css'
const Contact = () => {
    const element = <FontAwesomeIcon icon={faMobile} />
    const element1 = <FontAwesomeIcon icon={faEnvelopeSquare} />
    const element2 = <FontAwesomeIcon icon={faMapMarkedAlt} />
    return (
        <div>
            <h1>Get in Touch</h1>
            <p>At Healthcare Hospital , we welcome your inquiries, feedback and suggestions. We try to respond to all queries as quickly as possible, but in some cases, it may take longer to respond to your message.</p>
            <div className=' details'>
                    <h1>Healthcare Hospital (Pte) Ltd</h1>
                    <p>{element}  0241355691 & 02 41355692</p>
                    <p> {element1} info@healthpvt.com admin@healthcarebd.com</p>
                    <p>{element2} SherSaah Road, Dhaka, 4000.</p>
                    
            </div>
           
        </div>
    );
};

export default Contact;