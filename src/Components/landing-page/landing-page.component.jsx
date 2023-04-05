import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// imported components 
import UserInput from "./components/user-input.component";
import CategoryDropDown from "./components/category-dropdown.component";


// styled components
const LandingPageContainer = styled.div `
height: 100vh;
justify-content: center;
display: flex;
flex-direction: column;
align-items: center;
    h1 {
      text-align: center;
      color: #353535;
    }
`

const Button = styled.button `
  cursor: pointer;
  margin: 1.4rem;
  width: 150px;
  height: 40px;
  border-radius: 20px;
  border: orange 1px solid; 
  background-color: transparent;
  transition: 0.3s ease;
  font-weight: bold;
  &:hover {
    background-color: orange; 
    color: white;
    border: none;
  }
  &:active {
    background-color: #eca117;
  }
`

const LandingPage = () => {

  const navigate = useNavigate(); 

    const [username, setUsername] = useState({name: ""}); 

    const handleChange = (e) => {
       setUsername(e.target.value)
    }; 

    const submitHandler = () => {
    
      navigate('/trivia'); 
    }; 

    

    return (
      <LandingPageContainer>

        <h1>Welcome To Trivia!</h1>
        <UserInput handleChange={handleChange} /> 
        <CategoryDropDown /> 
     <Button onClick={submitHandler}>Begin Trivia!</Button>

      </LandingPageContainer>
    );
}; 

export default LandingPage; 