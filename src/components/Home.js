import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
  return (
      <Container>
          <Section 
          carModel={"Model 3"} 
          desciption={"Order Online for Touchless Delivery"}
          orderButton={"Custom Order"} 
          image_url={"/images/model-3.jpg"} />
          <Section 
          carModel={"Model Y"} 
          desciption={"Order Online for Touchless Delivery"}
          orderButton={"Custom Order"} 
          image_url={"/images/model-y.jpg"} />
          <Section 
          carModel={"Model S"} 
          desciption={"Order Online for Touchless Delivery"}
          orderButton={"Custom Order"} 
          image_url={"/images/model-s.jpg"} />
          <Section 
          carModel={"Model X"} 
          desciption={"Order Online for Touchless Delivery"}
          orderButton={"Custom Order"} 
          image_url={"/images/model-x.jpg"} />
      </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`