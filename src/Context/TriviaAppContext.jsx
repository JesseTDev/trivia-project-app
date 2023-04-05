import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TriviaContext = createContext(); 


export const TriviaProvider = ( { children } ) => {

    const [triviaData, setTriviaData] = useState([]); 
    const [loading, setLoading] = useState(false); 

    const getTriviaData = async () => {
        try {
            setLoading(true); 
            const response = await axios.get('https://the-trivia-api.com/api/questions?limit=5')
            setTriviaData(response.data);
            setLoading(false); 
        }
        catch (error) {
            console.log(error); 
        };
    }; 

    useEffect(() => {
        getTriviaData();
    }, []); 
    
    return (
    <TriviaContext.Provider value={[loading]}>
        { children }
    </TriviaContext.Provider>
    );
}; 