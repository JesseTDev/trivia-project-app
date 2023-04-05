import React from "react";
import styled from "styled-components";

// imported components 
import UserInput from "./components/user-input.component";
import CategoryDropDown from "./components/category-dropdown.component";


// stylerd components
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
  width: 150px;
  height: 40px;
  border-radius: 20px;
  border: orange 1px solid; 
  background-color: transparent;
  transition: 0.3s ease;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`
const LandingPage = () => {
    return (
      <LandingPageContainer>

        <h1>Welcome To Trivia!</h1>
        <UserInput /> 
        <CategoryDropDown /> 
     <Button>Begin Trivia!</Button>

      </LandingPageContainer>
    );
}; 

export default LandingPage; 