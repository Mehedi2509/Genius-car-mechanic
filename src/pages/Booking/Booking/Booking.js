import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();

    return (
        <div>
            <h1 className="my-5">this is booking: {serviceId}</h1>
        </div>
    );
};

export default Booking;