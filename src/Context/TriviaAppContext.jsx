import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TriviaContext = createContext();


export const TriviaProvider = ({ children }) => {
    const [triviaData, setTriviaData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState({ name: '' });
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedDifficulty, setSelectedDifficulty] = useState('medium'); 
    const [submit, setSubmit] = useState(false);
    const [score, setScore] = useState(0); 

    console.log(triviaData)
    console.log(selectedCategory)

    const getTriviaData = async () => {
        try {
            setLoading(true)
            const response = await axios.get(`https://the-trivia-api.com/api/questions?&categories=${selectedCategory}&difficulty=${selectedDifficulty}&limit=6`)
            setTriviaData(response.data);
            setLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        getTriviaData();
    }, [selectedCategory, selectedDifficulty]);


    return (
        <TriviaContext.Provider 
        value={{ 
            triviaData, 
            loading, 
            username,
             setUsername, 
             selectedCategory, 
             setSelectedCategory, 
             submit, 
             setSubmit,
             selectedDifficulty,
             setSelectedDifficulty,
             score,
             setScore
              }}>
            {children}
        </TriviaContext.Provider>
    );
}; 
