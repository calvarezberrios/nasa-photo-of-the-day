import React from 'react';
import styled from "styled-components";

const FooterSection = styled.footer`
    background: #B8D2FF;
    padding: 10px;

    p {
        font-size: .8rem;
        margin: 0;
    }
`;

const Footer = () => {
    return (
        <FooterSection>
            <p>&copy; 2020, Carlos Emmanuel Alvarez-Berrios, Using NASA API. - A Project for Lambda School React Class.</p>
        </FooterSection>
    );
};

export default Footer;