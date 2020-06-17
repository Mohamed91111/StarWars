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
    overflow: scroll;
    max-height: 550px;
    overflow-x: hidden;
    @media (max-width: 1100px) { 
        grid-template-columns: 1fr 1fr 1fr ;
    }
    @media (max-width: 800px) { 
        grid-template-columns: 1fr 1fr ;
    }
    @media (max-width: 600px) { 
        grid-template-columns: 1fr ;
    }

    .scroll-list::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: rgba(70, 95, 111, 0.87);
}
::-webkit-scrollbar-thumb {
  background: rgb(61, 60, 60);
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
    height: 30px;
    width: 140px;
    margin-top: 15px;
    transition: 0.3s ease-in-out;
    border-radius: 3px;
    color: white;
    
    :hover{
        background: #ccc;
        cursor:pointer;
    }
`




export default function List({people,addFavPeople}) {
    
    const elements = people.map((e) => ( 
      <StyledCard  key={e.name}>
        <div className='container'>
         
          <div>Name:{e.name}</div>
          <div>Gender: {e.gender}</div>
          <div>Born on:{e.birth_year}</div>
          <StyledButton onClick={()=> addFavPeople(e)}>
            Add To Favorites
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
