import React from 'react';
import notfound from '../../images/404 .png';


import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <div className="notfound">
            <img src={notfound} alt="" />
            </div>
            
        </div>
    );
};

export default NotFound;