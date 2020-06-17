import React from 'react'
import styled from "styled-components";
import darthVated from "../assets/villain.svg"


const StyledNav = styled.nav`
    display: flex;
        img{
            width: 40px;
        }
        span{
            padding: 5px;
            cursor: pointer;
            
        }
       
        background-color: #6E6E6E;
        height:  50px;
        ul{
            list-style-type: none;
            margin: 0;
            padding: 0;
            padding-top: 15px;
            padding-left: 25px;
            li{
                display:inline;
                margin-left: 20px;
                cursor: pointer;
                color: white;
            }
            li:hover{
                
                border-bottom:1px solid red;
            }
        }
    `
export default function Nav({changePage}) {
   
    return (
        <StyledNav>
            <span onClick={()=>changePage("home")}><img src={darthVated} alt=""/></span>
            <ul>
                <li onClick={()=>changePage("home")}>Home</li>
                <li onClick={ ()=> changePage("fav")}>Favorites</li>
            </ul>
        </StyledNav>
    )
}
