import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  padding: 6rem 0;
  flex-direction: column;
`

export const SuccessTitle = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-size: 2rem;
  font-weight: 800;

  color: ${(props) => props.theme['yellow-dark']};
`

export const SuccessSubTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;

  color: ${(props) => props.theme['base-subtitle']};
`

export const SuccessContent = styled.div`
  display: flex;
  justify-content: space-between;
  
  width: 100%;
  margin-top: 2.5rem;
`

export const OrderInfoCard = styled.div`
  display: flex;
  flex-direction: column;


  border-radius: 6px 36px;
  padding: 2.5rem;
  gap: 2rem;

  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme['purple']};
    // border-image: linear-gradient(${(props) => props.theme['yellow']}, ${(props) => props.theme['purple']}) 30;
  
  div {
    display: flex;
    flex-direction: row;
    
    div {
      display: flex;
      flex-direction: column;
    }
  }
`

export const OrderInfoText = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  
  b {
    font-weight: 700;
  }
`