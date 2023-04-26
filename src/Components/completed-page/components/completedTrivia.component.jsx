import React, { useContext } from "react";
import styled from "styled-components";
import { TriviaContext } from "../../../Context/TriviaAppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateBack } from "@fortawesome/free-solid-svg-icons";

const CompletedPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        text-decoration: underline;
    }
`

const ReturnBtn = styled.div `
cursor: pointer;
width: 150px;
display: flex;
text-align: center;
height: 50px;
border-radius: 25px;
border: 1px solid orange;
transition: 0.3s ease;
box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
margin-top: 10px;
p {
    align-self: center;
}
span {
    align-self: center;
    margin: 10px;
}
&:hover {
   background-color: orange;
   color: white;
}
`

const CompletedTriviaPage = () => {

    const { username, selectedCategory, selectedDifficulty, score} = useContext(TriviaContext);


    const completedHandler = () => window.location.reload(false); 

    const completedQuiz = () => {
        if (score === 6) {
            return <h2>{username.name.toString()}, Wow great job! You got all 6 out of 6 questions correct!!!</h2>
        } else if (score >= 3) {
            return <h2>{username.name.toString()}, you got {score} out of 6 questions correct, great score!</h2>
        } else if (score > 1) {
            return <h2>{username.name.toString()}, you got {score} out of 6 questions, good try, but you can do better!</h2>
        } else {
            return <h2>{username.name.toString()}, you got {score} out of 6 questions. Better luck next time! Try again!</h2>
        }; 
    }; 
    
    return (
       
       <CompletedPageContainer>
       <h1>Trivia Completed!</h1>
       <h2>Category: {selectedCategory}</h2>
       <h2>Difficulty: {selectedDifficulty}</h2>
       {completedQuiz()}
       <ReturnBtn onClick={completedHandler}><span><FontAwesomeIcon icon={faArrowRotateBack} /></span><p>Back To Start</p></ReturnBtn>
   </CompletedPageContainer>
   
    );
};

export default CompletedTriviaPage; 