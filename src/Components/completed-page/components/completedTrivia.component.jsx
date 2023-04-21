import React, {useContext} from "react";
import styled from "styled-components";
import { TriviaContext } from "../../../Context/TriviaAppContext";

const CompletedPageContainer = styled.div `
    
`

const CompletedTriviaPage = () => {

 const {username, selectedCategory,  selectedDifficulty,  score} = useContext(TriviaContext); 

    return (
<CompletedPageContainer>
    <h1>Trivia Completed!</h1>
    <h2>Category: {selectedCategory}</h2>
    <h2>Difficulty: {selectedDifficulty}</h2>
    <h2>{`${username.name} Your Score ${score}`}</h2>
    <button>Restart Quiz</button>
    <button>Back To</button>
</CompletedPageContainer>
    );
};

export default CompletedTriviaPage; 