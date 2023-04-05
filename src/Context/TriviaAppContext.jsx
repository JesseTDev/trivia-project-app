import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TriviaContext = createContext(); 


export const TriviaProvider = ( { children } ) => {

    const [triviaData, setTriviaData] = useState([]); 

    const getTriviaData = async () => {
        try {
            const response = await axios.get('https://the-trivia-api.com/api/questions?limit=5')
            setTriviaData(response.data);
            console.log(response.data); 
        }
        catch (error) {
            console.log(error); 
        };
    }; 

    useEffect(() => {
        getTriviaData();
    }, []); 
    
    return (
    <TriviaContext.Provider value={triviaData}>
        { children }
    </TriviaContext.Provider>
    );
}; 