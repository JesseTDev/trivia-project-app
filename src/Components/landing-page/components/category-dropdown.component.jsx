import React, { useContext } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from "styled-components";
import { TriviaContext } from "../../../Context/TriviaAppContext";

// styled components 
const DropdownContainer = styled.div `
    width: 50%;
    align-items: center;
    h3 {
text-align: center;
    }
`


const CategoryDropDown = () => {

  const [trivaData] = useContext(TriviaContext); 

    return (
        <DropdownContainer>
          <h3>Choose a Category: </h3>
        <Box sx={{ minWidth: 120}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Select Category"
            // onChange={handleChange}
          >
    
            <MenuItem value={null}>General Knowledge</MenuItem>
            <MenuItem>Science</MenuItem>
            <MenuItem>Music</MenuItem>
            <MenuItem>History</MenuItem>
          </Select>
        </FormControl>
      </Box>
      </DropdownContainer>
    );
};

export default CategoryDropDown; 