import React from 'react'
import styled from "styled-components";



const StyledContainer = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 85vw;
    margin: auto;
    margin-top: 50px;
    grid-gap: 15px;
    grid-row-gap: 30px;
    justify-items: center;
    @media (max-width: 1100px) { 
        grid-template-columns: 1fr 1fr 1fr ;
    }
    @media (max-width: 800px) { 
        grid-template-columns: 1fr 1fr ;
    }
    @media (max-width: 600px) { 
        grid-template-columns: 1fr ;
    }
`
const StyledCard = styled.div`
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    height: 120px;
    width: 200px;
    padding: 12px;
    text-align: center;
    background: #00000091;
    color: white;
    
`

const StyledButton = styled.button`
    border: 1px solid #ccc;
    background: transparent;
    height: 45px;
    width: 140px;
    margin-top: 15px;
    transition: 0.3s ease-in-out;
    border-radius: 3px;
    color: white;
    :hover{
        background: #ccc;
    }
`

export default function Fav({currentFav,RemoveFavorite}) {
    console.log('inFav', currentFav)

    const elements = currentFav.map((e) => ( 
        <StyledCard  key={e.name}>
          <div className='container'>
           
            <div>Name:{e.name}</div>
            <div>Eye Color: {e.eye_color}</div>
            <div>Age:{e.birth_year}</div>
            <StyledButton onClick={()=> RemoveFavorite(e)}>
              Remove from Favorites
            </StyledButton>
          </div>
        </StyledCard>
      ))
  
    return (
        <div>
            <StyledContainer>{elements}</StyledContainer>
        </div>
    )
}








