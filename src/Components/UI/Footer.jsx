import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { minWidth, maxWidth } from './breakpoints';

const FooterStyle = styled.footer`
    display: flex;
    justify-content: center;

`;

const FooterText = styled(Link)`
    text-decoration: none;
    font-size: 1.2rem;
    margin: 6% 3%;
    display: table-row;
    &:link {
        color: black;
    }
    &:visited {
        color: black;
    }
    &:hover {
        color: gray;
    }
    
@media ${maxWidth.sm} {
    font-size: .8rem;
}
`;

const FooterLink = styled.a`
text-decoration: none;
font-size: 1.2rem;
margin: 6% 3%;
display: table-row;
color: black;
&:visited {
    color: black;
}
&:hover {
    color: gray;
}
&:link {
    color: black;
}

@media ${maxWidth.sm} {
    font-size: .8rem;
}
`;

const Footer = () => {
    return (
        <FooterStyle>
                <FooterText to='/'>Contact</FooterText>
                <FooterText to='/'>Report Bug</FooterText>
                <FooterText to='/'>Licence</FooterText>
                <FooterLink href='https://github.com/DanielJutila/tabletop' target='_blank' rel='noopener noreferrer'>Github</FooterLink>
                <FooterText to='/privacy'>Privacy</FooterText>
        </FooterStyle>
    )
}

export default Footer;