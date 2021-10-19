import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright,  } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'
const Footer = () => {
    const element = <FontAwesomeIcon icon={faCopyright} />
    return (
        <div className='footer'>
           <h4>{element} Copyright 2021. All Rights Reserved by Healthcare Hospital (Pte.) Ltd.</h4> 

        </div>
    );
};

export default Footer;