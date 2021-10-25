import React from 'react';
import expart1 from '../../../images/exparts/expart (1).jpg';
import expart2 from '../../../images/exparts/expart (2).jpg';
import expart3 from '../../../images/exparts/expart (3).jpg';
import expart4 from '../../../images/exparts/expart (4).jpg';
import Expart from '../Expart/Expart';

const exparts = [
    { id: 1, name: 'Robat Hook', img: expart1 },
    { id: 2, name: 'Bangri Hook', img: expart2 },
    { id: 3, name: 'Yamina Luso', img: expart3 },
    { id: 4, name: 'Go Bindo ', img: expart4 },
];

const Exparts = () => {
    return (
        <div id="exparts" className="container">
            <h1 className="text-primary text-center mb-5">Our Exparts Mechanic</h1>
            <div className="row">
                {exparts.map(expart => <Expart key={expart.id} expart={expart}></Expart>)}
            </div>
        </div>
    );
};

export default Exparts;