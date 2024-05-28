import React, {useState} from "react";
import styled from "styled-components";


const SignUpDiv = styled.div`
    display: flex;
    background-color: #f2f2f2;
    justify-content: center;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 20rem;
    label {
        margin-top: 1rem;
        margin-left: 1rem;
        font-size: 1.2rem;
        font-weight: bold;
        
    }
    input {
        padding: .5rem;
        padding-left: .1rem;
        padding-top: .1rem;
        width: 80%;
        align-self: center;
    }
    button {
        padding: .5rem;
        background-color: #f2f2f2;
        border: 1px solid black;
        cursor: pointer;
        &:hover {
            background-color: black;
            color: white;
        }
        width: 80%;
        align-self: center;

    }
`;

const SignupForm = () => {
    const [userData, setUserData] = useState({
        userName: '',
        email: '',
        password: ''
    }); 
    return (
        <SignUpDiv>
            <Form onSubmit={(e) => e.preventDefault()}>
                <p className='subtle' style={{paddingLeft: '5px'}}>Signing up just lets you save stuff</p>
                <label htmlFor="email">Email</label><br/>
                <input type="email" id="email" name="email"/><br/>
                <label htmlFor="username">Username</label><br/>
                <input type="text" id="username" name="username"/><br/>
                <label htmlFor="password">Password</label><br/>
                <input type="password" id="password" name="password"/><br/>
                <button type="submit">Submit</button><br/>
            </Form>
        </SignUpDiv>
    );
};


export default SignupForm;