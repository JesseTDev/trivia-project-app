import React from "react";
import styled from "styled-components";

// imported components 
import LandingPage from "./Components/landing-page/landing-page.component";
// styled components 
const AppContainer = styled.div `
    
`
const TriviaApp = () => {
    return (
    <AppContainer>
        <LandingPage /> 
    </AppContainer>
    );
};

export default TriviaApp; 