import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterStyle = styled.footer`
    display: flex;
    justify-content: center;

`;

const FooterText = styled(Link)`
    text-decoration: none;
    font-size: 1.2rem;
    margin: 6% 3%;
    display: table-row;
    &:visited {
        color: black;
    }
    &:hover {
        color: gray;
    }
`;

const Footer = () => {
    return (
        <FooterStyle>
                <FooterText to='/'>Contact</FooterText>
                <FooterText to='/'>Report Bug</FooterText>
                <FooterText to='/'>Licence</FooterText>
                <FooterText to='/'>Github</FooterText>
                <FooterText to='/privacy'>Privacy</FooterText>
        </FooterStyle>
    )
}

export default Footer;