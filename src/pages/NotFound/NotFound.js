import React from 'react';
import { useHistory } from 'react-router';
import './NotFound.css';

const NotFound = () => {
    const history = useHistory();
    const handleBackToHome = () => {
        history.push('/home');
    }
    return (
        <div className="error-page">
            <button className="" onClick={handleBackToHome}>Back To Home</button>
        </div>
    );
};

export default NotFound;