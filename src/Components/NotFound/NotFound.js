import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div class="alert alert-danger d-flex justify-content-center align-items-center" role="alert">
            <h3>
            404 Error! 
            <br/>
            <br/>
            Content Not Found
            </h3>
        </div>
    );
};

export default NotFound;