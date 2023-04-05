import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from "styled-components";

// styled components 
const DropdownContainer = styled.div `
    width: 50%;
    align-items: center;
`

const CategoryDropDown = () => {
    return (
        <DropdownContainer>
        <Box sx={{ minWidth: 120, padding: 3}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Select Category"
            // onChange={handleChange}
          >
            <MenuItem value={10}>General Knowledge</MenuItem>
            <MenuItem value={20}>Science</MenuItem>
            <MenuItem value={30}>Music</MenuItem>
            <MenuItem value={30}>History</MenuItem>
          </Select>
        </FormControl>
      </Box>
      </DropdownContainer>
    );
};

export default CategoryDropDown; 