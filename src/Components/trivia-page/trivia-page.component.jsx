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

    const { loading, username, selectedCategory } = useContext(TriviaContext); 

    

    return (

       <TriviaPageContainer>
        <h1>Trivia Questions:</h1>
        <h2>User: {username.name}</h2>
        <h2>Category: {selectedCategory}</h2>
        <h3>Trivia Points: 0</h3>
    {loading ? <Loading /> : <TriviaCard />}
    </TriviaPageContainer>
    );
};

export default TriviaPage; 