import React, { useContext, useState } from "react";
import styled from "styled-components";
import { TriviaContext } from "../../Context/TriviaAppContext";

// import components 
import Loading from "../../Shared/components/Loading.component";
import TriviaCard from "./components/triviaCard.component";

// styled components 
const TriviaPageContainer = styled.div `
    display: flex;
    justify-content: center; 
    flex-direction: column; 
    height: 100vh;
    text-align: center; 
`

const TriviaPage = () => {

    const { loading, username, selectedCategory, triviaData, selectedDifficulty } = useContext(TriviaContext); 

    const [questionIndex, setQuestionIndex] = useState(0); 

    const nextQuestion = () => {
        setQuestionIndex(questionIndex + 1)
    }

    return (

       <TriviaPageContainer>
        <h1>Trivia Questions:</h1>
        <h2>User: {username.name}</h2>
        <h2>Category: {selectedCategory}</h2>
        <h2>Difficulty: {selectedDifficulty}</h2>
        <h3>Trivia Points: 0</h3>
    {loading ? <Loading /> : <TriviaCard question={triviaData[questionIndex]}/>}
    <button onClick={nextQuestion}>next</button>
    </TriviaPageContainer>
    );
};

export default TriviaPage; 