import React from "react";
import styled from "styled-components";

// styled components
const UserInputContainer = styled.div `
    display: flex;
    justify-content: center;
`

const TextField = styled.input `
    width: 400px;
    height: 40px;
    border-radius: 0.5rem;
    border: 1px solid orange; 
    text-align: center;
    font-size: 1rem;
`
const UserInput = ( { handleChange } ) => {

    return (
        <UserInputContainer>
<TextField onChange={handleChange} type='text' placeholder='Enter a name' /> 
        </UserInputContainer>
    );
};

export default UserInput; 
