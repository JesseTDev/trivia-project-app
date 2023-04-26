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

const categories = ['History', 'Science', 'Music', 'General Knowledge', 'Geography']; 

const CategoryDropDown = () => {

  const {selectedCategory, setSelectedCategory} = useContext(TriviaContext);  

  const {triviaData} = useContext(TriviaContext); 
 

  console.log('cat15', selectedCategory)

  const selectCategoryHandler = (e) => {
    setSelectedCategory(e.target.value); 
    console.log(selectedCategory)
  }; 

    return (
        <DropdownContainer>

          <h3>Choose a category: </h3>
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCategory || ''}
          label="Select Category"
          onChange={selectCategoryHandler}
>
      {categories.map((category) => {
      return (
        <MenuItem key={category} value={category}>
          {category}
        </MenuItem>
      );
    })}
          </Select>
        </FormControl>
      </Box>
      </DropdownContainer>
    );
};

export default CategoryDropDown; 