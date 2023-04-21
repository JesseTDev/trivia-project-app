import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { TriviaContext } from "../../Context/TriviaAppContext";

// import components 
import Loading from "../../Shared/components/Loading.component";
import TriviaCard from "./components/triviaCard.component";
import CompletedTriviaPage from "../completed-page/components/completedTrivia.component";
import TriviaInfo from "./components/trivia.info.component";


// styled components 
const TriviaPageContainer = styled.div `
    display: flex;
    justify-content: center; 
    flex-direction: column; 
    height: 100vh;
    text-align: center; 
    button {
        cursor: pointer; 
        width: 200px;
        height: 100px;
        align-self: center;
        margin-bottom: 15%;
        transition: 0.3s ease; 
        border: 1px solid orange; 
        border-radius: 1rem; 
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        &:hover {
            background-color: #2cc22c; 
            border: 1px solid transparent; 
        }
        &:active {
            background-color:  #23a323; 
        }
    }
`

const TriviaStopClock = styled.h2 `
    font-size: 2rem; 
    color: #eb3131; 
`

const TriviaPage = () => {

    const { loading, triviaData } = useContext(TriviaContext); 

    const [questionIndex, setQuestionIndex] = useState(0); 
    const [quizCompleted, setQuizCompleted] = useState(false); 
    const [remainingTime, setRemainingTime] = useState(10);
    const [completed, setCompleted] = useState(false); 

    const nextQuestion = () => {
        if(questionIndex === 5) {
          setQuizCompleted(true)
           return
        }
        setQuestionIndex((questionIndex) => questionIndex + 1);
        setRemainingTime(10);
      };

      useEffect(() => {
        const timer = setInterval(() => {
          if (remainingTime > 0) {
            setRemainingTime(remainingTime - 1);
          } else {
            if (questionIndex < triviaData.length - 1) {
              setQuestionIndex(questionIndex + 1);
              setRemainingTime(10);
            } else {
              setCompleted(true);
              setQuizCompleted(true);
            }
          }
        }, 1000);
      
        return () => clearInterval(timer);
    }, [questionIndex, remainingTime, triviaData, setCompleted, setQuizCompleted]);

    return (

       <TriviaPageContainer>
        {quizCompleted ? <CompletedTriviaPage /> :
        <> <TriviaInfo /> 
         <TriviaStopClock>Timer: {remainingTime}'s</TriviaStopClock>
     {loading ? <Loading /> : <TriviaCard nextQuestion={nextQuestion} question={triviaData[questionIndex]}/>}
     {completed && <CompletedTriviaPage />}
     <button onClick={nextQuestion}>Next Question</button> </>}
    </TriviaPageContainer>
    );
};

export default TriviaPage; 