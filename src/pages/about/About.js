import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    const element = <FontAwesomeIcon icon={faClinicMedical} size = '6x'/>
    return (
        <div className='mt-3'>
            {element}
            <h1>Company Overview</h1>
            <p>As the first homegrown healthsector in Bangladesh, Be-Tach was incorporated on 22nd February, 1984 and commenced operations as the country’s sole integrated investigative laboratory on 16th May, 1984 in Chittagong. It was a pioneering venture in the field of integrated and automated diagnostics in Bangladesh.

            Healthcare comprehensive range of investigative services have played a crucial role in helping millions of patients obtaining proper diagnostic services since its inception. Derived from one the world’s largest catalog of clinical laboratory procedures, our diagnostic insights reveal new avenues to identify and treat diseases, inspire healthy behaviors and improve health care management. Our Clinical Lab annually serves one in three residents of Chittagong and more than three-fourths of the physicians in the region, and our 500 employees understand that, in the right hands and with the right context, our diagnostic insights can inspire actions that transform lives.

            At present, Healthcare portfolio includes Clinical Laboratory Management, Diagnostic Modality Development and Commissioning, Specialist Physician Consultation Services, Research Center and many more.</p>
        </div>
    );
};

export default About;