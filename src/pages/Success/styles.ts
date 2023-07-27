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

export const SuccessContent = styled.div``

export const OrderInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  
  border-radius: 6px 36px;
`