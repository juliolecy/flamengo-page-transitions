import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
background: url(${({ image }) => image && image }) center;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
margin-top: -60px;
`;
const Container = styled.div`
color: #fff;
padding: 2rem;
backdrop-filter: blur(5px);
background-color: rgba(0,0,0,.4);
margin: 2rem;
border-radius: 15px;
display: flex;
flex-direction: column; 
max-width: 800px;
justify-content: center;
text-align:center;


    h1{ 
      font-size: clamp( 2rem, 8vw, 5rem);
      margin-bottom: .5rem;
    }

    p {
      font-size: clamp( 1rem, 6vw, 2.5rem);
      margin-bottom: 1rem;
    }

`;

const Main = ({image, Title, Description}) => {
  return (
  <Section image={image}>
    <Container>
      <h1>{Title}</h1>
      <p>{Description}</p>
      
    </Container>  
</Section>
  )
}

export default Main