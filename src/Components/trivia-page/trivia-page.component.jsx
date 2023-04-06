import React, { useContext, useState } from "react";
import styled from "styled-components";
import { TriviaContext } from "../../Context/TriviaAppContext";

// import components 
import Loading from "../../Shared/components/Loading.component";
import TriviaCard from "./components/triviaCard.component";

import quiz from "../../fakeData";

// styled components 
const TriviaPageContainer = styled.div `
    display: flex;
    justify-content: center; 
    flex-direction: column; 
    height: 100vh;
    h1 {
        text-align: center;
    }
`
const TriviaPage = () => {

    const { loading } = useContext(TriviaContext); 

    const [fakeData, setFakeData] = useState(quiz); 

    return (

       <TriviaPageContainer>
        <h1>Trivia Questions:</h1>
    {loading ? <Loading /> : <TriviaCard fakeData={fakeData} />}
    </TriviaPageContainer>
    );
};

export default TriviaPage; 