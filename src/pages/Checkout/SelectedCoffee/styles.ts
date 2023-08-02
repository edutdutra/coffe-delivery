import styled from "styled-components";

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SelectedCoffeeContent = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const SelectedCoffeeDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  div {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
`

export const CoffeeName = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;

  color: ${(props) => props.theme['base-subtitle']};
`

export const RemoveCoffeeButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: 0;

  border-radius: 6px;
  padding: 0 8px;
  gap: 4px;

  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;

  color: ${(props) => props.theme['purple']};
  background: ${(props) => props.theme['base-button']};

  span {
    color: ${(props) => props.theme['base-text']};
  }

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
    background: ${(props) => props.theme['base-hover']};

    span {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const CoffeePrice = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 700;
  
  text-align: right;

  color: ${(props) => props.theme['base-text']};
`