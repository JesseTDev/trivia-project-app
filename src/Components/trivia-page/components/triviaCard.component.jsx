import React, { useContext, useState } from "react";
import styled from "styled-components";
import { TriviaContext } from "../../../Context/TriviaAppContext";

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

const CorrectAnswer = styled(AnswerOptions) `
  button {
   background-colour: #0bc30b; 
  }
`

const IncorrectAnswer = styled(AnswerOptions) `
  button {
    background-colour: #e62323; 
  }
`

const TriviaCard = ({question}) => {

  const [selectedAnswer, setSelectedAnswer] = useState(null); 
  const {score, setScore} = useContext(TriviaContext); 
  

  const mergedAnswers = [question.correctAnswer, ...question.incorrectAnswers].sort(() => Math.random() - 0.5); 

 
  const selectAnswerHandler = (answer) => {
    if(answer === question.correctAnswer) {
      setScore(score + 1); 
    }; 
  }; 


    return (
      <Container>
<TriviaCardContainer>
        <Question>{question.question}</Question>
    <AnswerOptionContainer>
      {mergedAnswers.map((answer) => <AnswerOptions key={answer} onClick={() => selectAnswerHandler(answer)}>{answer}</AnswerOptions>)}
    </AnswerOptionContainer>
</TriviaCardContainer>
</Container>
    );
}; 

export default TriviaCard; 