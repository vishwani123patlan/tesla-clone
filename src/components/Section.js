import React from 'react'
import { Fade } from 'react-reveal'
import styled from 'styled-components'

function Section({ id, carModel, desciption, orderButton, image_url}) {
  return (
    <Wrap bgImage = {image_url} id={id}>
        <Fade bottom>
            <ItemText>
                <h1>{ carModel }</h1>
                <p>{ desciption }</p>
            </ItemText>
        </Fade>
        <Fade bottom>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        { orderButton }
                    </LeftButton>
                    <RightButton>
                        Existing Inventory
                    </RightButton>
                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </ Fade>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 10ovw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("${props.bgImage}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
`
const ItemText = styled.div`
    padding: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 20px;
    @media(max-width: 768px){
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.85;
    border-radius: 100px;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 10px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity; 0.65;
    color: black;
`

const DownArrow = styled.img`
    margin-top: 0px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`