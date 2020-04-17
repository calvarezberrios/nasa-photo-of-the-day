import React from 'react';
import Spaceship from "../../assets/images/spaceship.jpg";
import styled from "styled-components";

const HomeContent = styled.div`
    padding: 0 20px;

    p {
        margin-bottom: 30px;
    }

    img {
        width: 100%;
        height: 400px;
    }

    .attribution {
        display: block;
        position: relative;
        margin-top: -20px;
        padding-left: 20px;
        color: white;
    }
`;

const Home = () => {
    return (
        <HomeContent className="home">
                <h2 >Exploring the Universe</h2>
                <p >Welcome to Space Explorers, this is a place to explore the universe
                    from the comfort of your own home using just your computer or
                    mobile device. Check out the Photo Of The Day to see where your
                    journey will take you to today, or If you want to see where you
                    have been in the past, check out the photos by date section. Just
                    enter the date for the day you want to see and 'Voila!'. Just like
                    through time, you can see where you have been.
                </p>
                <img src={Spaceship} alt="By Justin Wei on Unsplash" /><span className="attribution">Photo by Justin Wei on Unsplash</span>

        </HomeContent>
    );
};

export default Home;