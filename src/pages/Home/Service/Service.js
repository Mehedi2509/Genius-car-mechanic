import React from 'react';
import { useHistory } from 'react-router';
import './Service.css';

const Service = (props) => {
    const { id, name, img, discription, price } = props.service;
    const history = useHistory();
    const handleBooking = () => {
        history.push(`/booking/${id}`)
    }
    return (
        <div className="service">
            <img width="100%" src={img} alt="" />
            <h3>Service Name: {name}</h3>
            <p>Discription: {discription}</p>
            <p>Price: {price}</p>
            <button onClick={handleBooking} className="btn btn-success">Book {name.toLowerCase()}</button>
        </div>
    );
};

export default Service;