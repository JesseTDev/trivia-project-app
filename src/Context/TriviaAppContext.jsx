import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TriviaContext = createContext(); 


export const TriviaProvider = ( { children } ) => {
    const [triviaData, setTriviaData] = useState([]); 
    const [loading, setLoading] = useState(false); 
    const [username, setUsername] = useState({name: ''}); 
    const [selectedCategory, setSelectedCategory] = useState([]); 
    const [submit, setSubmit] = useState(false); 

    console.log(selectedCategory)
    const getTriviaData = async () => {
        try {
            setLoading(true)
            const response = await axios.get('https://the-trivia-api.com/api/questions?categories=geography,history,music,general_knowledge,science&limit=4&difficulty=medium')
            setTriviaData(response.data)
            setLoading(false)
        }
        catch (error) {
            console.log(error)
        }
    }; 


    useEffect(() => {
        getTriviaData(); 
    }, []); 
  
    return (
    <TriviaContext.Provider value={{triviaData, loading, username, setUsername, selectedCategory, setSelectedCategory, submit, setSubmit}}>
        { children }
    </TriviaContext.Provider>
    );
}; 
