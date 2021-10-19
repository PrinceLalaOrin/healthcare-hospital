import React from 'react';
import './OurDr.css'
const OurDr = () => {
    return (
        <div>
            <h1>Meet Our Doctors</h1>
            <br />
            <br />
            <br />
           <div className="doctors"> <img src='./drImg/dr m 3.jpg' alt="" />  </div>
           <h4>Name :- Hasan Ali</h4>
           <p> ENT, Pediatrics</p>
           <br />
           <br />

           <img src='./drImg/dr f 2.jpg' alt="" />
           <h4>Name :- Priyanka Roy</h4>
           <p>Cardiology</p>
           <br />
           <br />

           <img src="./drImg/dr m 2.jpg" alt="" />
           <h4>Name :- Shuchatan Marma</h4>
           <p>General Surgery</p>

        </div>
    );
};

export default OurDr;