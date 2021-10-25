import React from 'react';

const Expart = ({ expart }) => {
    const { name, img } = expart;
    return (
        <div className="col-lg-4 col-sm-6 col-12 text-center g-4">
            <img src={img} alt="" width="200px" height="200px" className="rounded-circle" />
            <h2>{name}</h2>
        </div>
    );
};

export default Expart;