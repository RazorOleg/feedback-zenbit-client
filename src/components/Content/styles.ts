import styled from "styled-components";
import city from '../../assets/city.jpg'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const ContainerImage = styled.div`
    height: 90vh;
    width: 55%;
  

  @media (max-width: 992px) {
    height: 92vh;
  }

  @media (max-width: 550px) {
    width: 0%;
  }
  
`

export const Image = styled.div`
    background-image: url(${city});
    background-size: cover;
    height: 100%;
`


