import React, {useEffect,useState} from 'react'
import styled from "styled-components";
import axios from 'axios'
import List from './List'

const StyledSearchArea = styled.div`
    

    width: 85vw;
    margin: auto;
    margin-top:20px;
    input{
        margin-left: 10px;
        outline: none;
        border: none;
        border-bottom: 1px solid black;
        background: transparent;
        margin-right: 23px;
}
    }
`
const tempPeople = []
export default function Home({currentFavorite}) {
    const url = 'https://swapi.dev/api/people/'
    const [people, setPeople] = useState([])
    const [input, setInput] = useState('')
      useEffect(() => {
        temp2 = []
        peopleApi(setPeople,url)
      }, [])
     
      function addFavPeople(element){
        if (tempPeople.some((el) => el.name === element.name)) {
            // check if element already exist in the list
            window.alert('already exists')
          } else {
            let bin = []
            bin = [...bin, element] // set new element in bin
            tempPeople.push(...bin) // save it in global binForPeople to keep data
            currentFavorite([...tempPeople])
          }
      }
   
      const filterList = people
      .filter(
        (el) =>
          el.name.toLowerCase().match(input.toLowerCase()) || 
          el.gender.toLowerCase().match(input.toLowerCase()) ||
          el.birth_year.toLowerCase().match(input.toLowerCase())
      )
    return (
        <div>
            <StyledSearchArea>
            <label htmlFor="search">Search People: </label>
            <input value={input} onChange={(e) => setInput(e.target.value)} name="search"></input>
            
            </StyledSearchArea>
            
            <List people={filterList} addFavPeople={(x) => addFavPeople(x)}/>
        </div>
    )
}


let temp2 = []
function peopleApi(setPeople,url){
   axios
   .get(`${url}`)
   .then((res) => {
     temp2.push(...res.data.results)
     
     setPeople([...temp2])
     
     if (res.data.next !== null) {
       let processed_url = "https" + res.data.next.slice(6);
       peopleApi(setPeople,processed_url)
       
     }
    
   })
   .catch((error) => console.log(error))
 }  