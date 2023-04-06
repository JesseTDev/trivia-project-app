import React from "react";
import styled from "styled-components";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoadingContainer = styled.div `
  display: flex;
  align-items: center; 
  h2 {
    margin: 1rem;  
  }
`

const Loading = () => {
    return (
      <LoadingContainer>
        <h2>Loading Questions...</h2>
        <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
      </LoadingContainer>
    );
};

export default Loading; 