import React, { useState } from 'react'
import styled from "styled-components"
function Header(props) {
    const [isShow, SetIsShow] = useState(false);
  return (
    <Container>
        <a>
            <img src = "/images/logo.svg"  alt='tesla'/>
        </a>
        <Menu>
            <p>
                <a href='#modelS'>Model S</a>
            </p>
            <p>
                <a href='#model3'>Model 3</a>
            </p>
            <p>
                <a href='#modelX'>Model X</a>
            </p>
            <p>
                <a href='#modelY'>Model Y</a>
            </p>
            <p>
                <a href='#solarRoof'>Solar Roof</a>
            </p>
            <p>
                <a href='#solarPanel'>Solar Panels</a>
            </p>
        </Menu>
        <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Account</a>
        <a href='#' onClick={() => SetIsShow(true)} >Menu</a>
        </RightMenu>
        <SideBar show = {isShow} >
            <CrossButton>
                <a href='#' onClick={() => SetIsShow(false)}>X</a>
            </CrossButton>
            <li><a href='#'>Used Cars</a></li>
            <li><a href='#'>Inventory</a></li>
            <li><a href='#'>Insaurance</a></li>
            <li><a href='#'>Trade In</a></li>
            <li><a href='#'>Test Drive</a></li>
            <li><a href='#'>Charging</a></li>
            <li><a href='#'>CyberTruck</a></li>
            <li><a href='#'>Visite Store</a></li>
            <li><a href='#'>Factory Photos</a></li>
            <li><a href='#'>Utilities</a></li>
            <li><a href='#'>Find Us</a></li>
            <li><a href='#'>Support</a></li>
        </SideBar>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px; 
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;  
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    p{
        font-weight: bold;
        font-size: 17px;
        padding: 5px 20px;
        flex-wrap: nowwrap;
        &:hover{
            background: lightgrey;
            border-radius: 20px;
        }
    }
    @media(max-width: 1060px){
        display: none;
    }
`
const RightMenu = styled.div`
    display: flex;
    a{
        font-weight: bold;
        font-size: 17px;
        padding: 0 10px;
    }
`

const SideBar = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background: white;
    width: 300px;
    z-index: 10000;
    list-style: none;
    padding: 50px;
    text-align: start;
    display: flex;
    flex-direction: column;
    transform:  ${ props => props.show ? 'translateX(0)' : 'translateX(100%)' };
    transition: transform 0.3s ease-in;
    li{
        padding: 15px 0;
    }
`
const CrossButton = styled.div`
    display: flex;
    justify-content: flex-end;
    a{
        font-size: 20px;
        font-weight: 600;
    }
`