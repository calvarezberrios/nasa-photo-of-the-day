import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ContentCard from "./ContentCard";
import styled from "styled-components";
import $ from "jquery";

const PhotoTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    
`;

const PhotoByDate = ({ data, setDate}) => {
    const [imgDate, setImgDate] = useState();

    useEffect(() => {

        // Set the date of the image to display
        setDate(new Date(imgDate));


        // Show the component div if hidden after setting the date
        if($(".byDate").is(":hidden")) {
            $(".byDate").show();
        }
        
    }, [imgDate, setDate]);


    function changeImg(e) {
        // Get the value from the date input
        let value = e.target.value;
        // Separate the date into array 
        let valueArray = value.split("-");

        // Set imgDate state to the date with the correct format to pass to the api
        setImgDate(new Date(`${valueArray[1]}-${valueArray[2]}-${valueArray[0]}`));


        // hide the component div 
        $(".byDate").hide();

        
    }

    if(!data) return (
        <div className = "loading" style = {{textAlign: "center"}}>
            <h2>Choose a Date: </h2>
            <input type = "date" className = "imgDate" onChange={changeImg} min = "1995-06-16" max = "2020-04-15" />
            <h2><FontAwesomeIcon icon = "spinner" pulse /></h2>
        </div>
    );

    return (
        <div className = "byDate">
            <PhotoTitle className = "title_dateSelector">
                <h2>{data.title}</h2>
                <span>Choose a Date: <br /><input type = "date" className = "imgDate" onChange={changeImg} min = "1995-06-16" max = "2020-04-15" /></span>
            </PhotoTitle>
            <ContentCard data = {data} />
            
        </div>
    );
};

export default PhotoByDate;