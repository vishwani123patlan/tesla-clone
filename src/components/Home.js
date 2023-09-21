import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
  return (
      <Container>
          <Section 
          id={"model3"}
          carModel={"Model 3"} 
          desciption={"Order Online for Touchless Delivery"}
          orderButton={"Custom Order"} 
          image_url={"/images/model-3.jpg"} 
          />
          <Section 
          id={"modelY"}
          carModel={"Model Y"} 
          desciption={"Order Online for Touchless Delivery"}
          orderButton={"Custom Order"} 
          image_url={"/images/model-y.jpg"} />
          <Section 
          id={"modelS"}
          carModel={"Model S"} 
          desciption={"Order Online for Touchless Delivery"}
          orderButton={"Custom Order"} 
          image_url={"/images/model-s.jpg"} />
          <Section 
          id={"modelX"}
          carModel={"Model X"} 
          desciption={"Order Online for Touchless Delivery"}
          orderButton={"Custom Order"} 
          image_url={"/images/model-x.jpg"} />
          <Section 
          id={"solarPanel"}
          carModel={"Solar Panel"} 
          desciption={"Produce Clean Energy From Your Roof"}
          orderButton={"Order Now"} 
          image_url={"/images/solar-panel.jpg"} />
          <Section 
          id={"solarRoof"}
          carModel={"Solar Roof"} 
          desciption={"Produce Clean Energy From Your Roof"}
          orderButton={"Order Now"} 
          image_url={"/images/solar-roof.jpg"} />
      </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`