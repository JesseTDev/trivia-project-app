import React, {useContext} from "react";
import { TriviaContext } from "./Context/TriviaAppContext";
// imported components 
import LandingPage from "./Components/landing-page/landing-page.component";
import TriviaPage from "./Components/trivia-page/trivia-page.component";




const TriviaApp = () => {

  const {submit} = useContext(TriviaContext); 

    return (
  <div>
   {submit ?  <TriviaPage /> : <LandingPage />}
  </div>
    );
    
};

export default TriviaApp; 