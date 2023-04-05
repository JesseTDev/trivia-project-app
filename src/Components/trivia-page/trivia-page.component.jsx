import React, { useContext } from "react";
import { TriviaContext } from "../../Context/TriviaAppContext";

// import components 
import Loading from "../../Shared/components/Loading.component";

const TriviaPage = () => {

    const [loading] = useContext(TriviaContext); 


    return (
        <div>
    {loading ? <Loading /> : null} 
        </div>
    );
};

export default TriviaPage; 