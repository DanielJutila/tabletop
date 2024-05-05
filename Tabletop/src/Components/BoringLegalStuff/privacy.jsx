import React from 'react';
import styled from 'styled-components';


const PrivacyDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    margin-right: auto;
    margin-left: auto;
`;

const PrivacyList = styled.ol`
    display: block;
    list-style-type: none;
`;

const Privacy = () => {

    return (
    <PrivacyDiv>
        <PrivacyList>
            <li>Privacy Policy</li>
                <ul>
                    <li>I do not sell your data</li>
                </ul>
            <li>Terms of Service</li>
        </PrivacyList>
    </PrivacyDiv>
    );
}


export default Privacy;