import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Submit = styled.button`
    color: red;
`;

const Button = () => {


    return (
        <div>
            <Link to='/about'>
            <Submit className='text-red-300'>Button</Submit>
            </Link>
        </div>
    );
}

export default Button;