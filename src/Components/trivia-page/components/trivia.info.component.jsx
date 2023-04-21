import React, {useContext} from "react";
import styled from "styled-components";
import { TriviaContext } from "../../../Context/TriviaAppContext";

const TriviaInfoContainer = styled.div `
    
`

const TriviaInfo = () => {
    const { username, selectedCategory, selectedDifficulty, score } = useContext(TriviaContext); 

    return (
 <TriviaInfoContainer>
 <h1>Trivia Questions:</h1>
        <h2>User: {username.name}</h2>
        <h3>Category: {selectedCategory}</h3>
        <h3>Difficulty: {selectedDifficulty}</h3>
        <h2>Questions Correct: {score} out of 6</h2>
 </TriviaInfoContainer>
    );
};

export default TriviaInfo; 

