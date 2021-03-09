import React from 'react';
import styled from 'styled-components';

const Heading = styled.header`
    max-width: 50rem;
    margin: 2rem auto;
    text-align: center;
`;

const H1 = styled.h1`
    font-family: 'Oswald', sans-serif;
    margin-bottom: 0.8em;

`;

export const Header= () =>{
    return (
       <Heading>
           <H1>It is a Simple Image Gallery</H1>
          <marquee> <p>This is Screening Assisment project for Yellow Class!</p></marquee>
           <p>Made By Abhishek Kumar</p>
       </Heading>
    )
}