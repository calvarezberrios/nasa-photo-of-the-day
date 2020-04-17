import React from 'react';
import { Card, CardBody, CardText, CardImg } from 'reactstrap';

const ContentCard = ({ data }) => {
    return (
        <Card >
            <CardBody style = {{border: "none"}}>
                {data.url.includes(".jpg") ? <CardImg width = "100%" height = "450" src = {data.url} alt = "From NASA API" /> : <iframe title = {data.title} width = "100%" height = "500" src = {data.url} frameBorder = "none"></iframe>}
                <CardText style = {{display: "flex", justifyContent: "space-between"}}>
                    <small className="text-muted">Date: {data.date}</small>
                    {data.copyright != null ? <small className="text-muted">By: {data.copyright}</small> : ""}
                </CardText>
                <CardText>{data.explanation}</CardText>
            </CardBody>
            
        </Card>
    );
};

export default ContentCard;