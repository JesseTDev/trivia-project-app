import React, {useContext} from "react";
import styled from "styled-components";
import { TriviaContext } from "../../../Context/TriviaAppContext";

const TriviaInfoContainer = styled.div `
    
`

const TriviaInfo = () => {
    const { loading, username, selectedCategory, triviaData, selectedDifficulty, score } = useContext(TriviaContext); 

    return (
 <TriviaInfoContainer>
 <h1>Trivia Questions:</h1>
        <h2>User: {username.name}</h2>
        <h2>Category: {selectedCategory}</h2>
        <h2>Difficulty: {selectedDifficulty}</h2>
        <h3>Trivia Points: {score}</h3>
 </TriviaInfoContainer>
    );
};

export default TriviaInfo; 

