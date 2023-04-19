import React, { useContext } from "react";
import styled from "styled-components";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TriviaContext } from "../../../Context/TriviaAppContext";

const DropdownContainer = styled.div `
        width: 50%;
    align-items: center;
        h3 {
    text-align: center;
        }
`
const difficulty = ['easy', 'medium', 'hard']; 

const DifficultyDropDown = () => {

    const {selectedDifficulty, setSelectedDifficulty} = useContext(TriviaContext); 

    const selectDifficultyHandler = (e) => {
        setSelectedDifficulty(e.target.value);
    
    };

  
    return (
        <DropdownContainer>

        <h3>Choose Difficulty: </h3>
      <Box sx={{ minWidth: 120}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedDifficulty || ''}
        label="Select Difficulty"
        onChange={selectDifficultyHandler}>
      {difficulty.map((difficulty) => {
      return (
        <MenuItem key={difficulty} value={difficulty}>
          {difficulty}
        </MenuItem>
      );
    })}
    
        </Select>
      </FormControl>
    </Box>
    </DropdownContainer>
    );
};

export default DifficultyDropDown; 