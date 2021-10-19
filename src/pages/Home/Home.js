import React from 'react';
import banner from '../../images/Background.png';
import './Home.css'
import Services from './Services/Services';
const Home = () => {
    return (
        <div>
          <div className="banner">
            <img src={banner} alt="" />
             <Services></Services>
          </div>
        </div>
    );
};

export default Home;