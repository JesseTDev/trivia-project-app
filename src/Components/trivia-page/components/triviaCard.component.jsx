import React from "react";
import styled from "styled-components";


// styled components 
const Container = styled.div `
  width: 100%;
  height: 100vh; 
  display: flex;
  align-items: center; 
  justify-content: center; 
`
const TriviaCardContainer = styled.div `
 border: 1px solid #888888;
  border-radius: 8px;
  padding: 16px;
  width: 80%; 
  heigh: 20%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Question = styled.h2 `
   font-size: 24px;
   margin-bottom: 16px;
`

const AnswerOptionContainer = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`
const AnswerOptions = styled.div `
  margin-bottom: 8px;
  padding: 8px;
  width: 400px;
  font-weight: bold;
  text-align: center;  
  border: 1px solid orange; 
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s ease; 
  &:hover {
    color: white; 
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: #fcc653;
  }
`
const TriviaCard = () => {
    return (
      <Container>
<TriviaCardContainer>
        <Question>What is blah blah</Question>
    <AnswerOptionContainer>
        <AnswerOptions>sdfkls</AnswerOptions>
        <AnswerOptions>dksfds</AnswerOptions>
        <AnswerOptions>lasdas</AnswerOptions>
        <AnswerOptions>Skgkg</AnswerOptions>
    </AnswerOptionContainer>
</TriviaCardContainer>
</Container>
    );
}; 

export default TriviaCard; 