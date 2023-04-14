import React, { useContext } from "react";
import styled from "styled-components";

// imported components 
import UserInput from "./components/user-input.component";
import CategoryDropDown from "./components/category-dropdown.component";
import { TriviaContext } from "../../Context/TriviaAppContext";


// styled components
const LandingPageContainer = styled.div`
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

const Button = styled.button`
  cursor: pointer;
  margin: 1.4rem;
  width: 150px;
  height: 40px;
  border-radius: 20px;
  border: orange 1px solid; 
  background-color: transparent;
  transition: 0.3s ease;
  font-weight: bold;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
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


  const { username, setUsername } = useContext(TriviaContext);
  const { setSubmit } = useContext(TriviaContext);

  const handleChange = (e) => {
    setUsername({ name: e.target.value })
  };


  const submitHandler = (e) => {
    e.preventDefault();
    setUsername({ ...username, name: username.name })
    setSubmit(true);

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