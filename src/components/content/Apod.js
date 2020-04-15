import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Apod = ({ data, today }) => {
    //today(new Date());

    useEffect(() => {
        today(new Date());
    }, [today]);

    if(!data) return <h2>Loading <FontAwesomeIcon icon="spinner" pulse /></h2>;

    return (
        <div className = "apod">
            <h2>{data.title}</h2>
            <img src = {data.url} alt = "From NASA API" />
            <div className="date_copyright">
            <h4>Date: {data.date}</h4>
            <h4>{data.copyright != null ? `By: ${data.copyright}` : ""}</h4>
            </div>
    
            <p>{data.explanation}</p>
            
        </div>
    );
};

export default Apod;