import React, {useState} from 'react';
import Nav from './components/Nav'
import Fav from './components/Fav'
import Home from './components/Home'
import dark from './assets/dark.jpg'
import styled from "styled-components";

const Content = styled.div `

background-image: url(${dark});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 93vh;
  max-height: 110vh;
  
  h1{
    margin-top: 0;
    padding-top: 20px;
  }
`


function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [currentFav, setCurrentFav] = useState([])
  
  function changePage(page){
    setCurrentPage(page)
  }
  function currentFavorite(favList){
    setCurrentFav(favList)
  }

  function RemoveFavorite(removeElement){
    console.log(removeElement)
  }
  return (
    <div className="App">
     
     <Nav changePage={(e) => changePage(e)}/>
     <Content>
     <h1 align="center">STAR WARS API</h1>
     {currentPage === 'home' ?<Home currentFavorite={(e)=>currentFavorite(e)}/>:<Fav currentFav={currentFav}  RemoveFavorite={(e)=>RemoveFavorite(e)}/>}
     </Content>
    </div>
  );
}   

export default App;
