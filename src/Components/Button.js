import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

function Button() {
  return (

    <Container>
        <button onClick={() => functionName()} >
         Click me!
         </button>
        
    </Container>
  )
}

export default Button;

const Container = styled.div`
height:20px;
width: 180px;
background-color: lightblue;
`;
