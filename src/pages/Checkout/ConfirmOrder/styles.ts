import styled from "styled-components";

export const ConfirmOrderContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
  width: 380px;
`

export const OrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  gap: 0.75rem;
`
export const OrderDetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

export const OrderText = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
`

export const OrderPriceText = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
`

export const OrderTotalText = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 700;

  color: ${(props) => props.theme['base-subtitle']};
`

export const ConfirmOrderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  border: 0;
  
  border-radius: 6px;
  padding: 12px 8px;
  
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  

  color: ${(props) => props.theme['white']};
  background: ${(props) => props.theme['yellow']};
  
  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`