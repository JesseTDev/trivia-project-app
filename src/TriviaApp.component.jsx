import React from "react";
import { Route, Routes } from "react-router-dom";

// imported components 
import LandingPage from "./Components/landing-page/landing-page.component";
import TriviaPage from "./Components/trivia-page/trivia-page.component";



const TriviaApp = () => {

    return (
  <Routes>
  <Route path="/" element={<LandingPage />} /> 
  <Route path="/trivia" element={<TriviaPage />} /> 
  </Routes>
    );
    
};

export default TriviaApp; 