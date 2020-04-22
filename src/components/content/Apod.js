import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContentCard from "./ContentCard";

const Apod = ({ data, today }) => {
    //today(new Date());

    useEffect(() => {
        today(new Date());
    }, [today]);

    if(!data) return <h2>Loading <FontAwesomeIcon icon="spinner" pulse /></h2>;

    return (
        <div className = "apod">
            <h2 style = {{paddingLeft: "20px"}}>{data.title}</h2>
            <ContentCard data = {data} />
            
        </div>
    );
};

export default Apod;