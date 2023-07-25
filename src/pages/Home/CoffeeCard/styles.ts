import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  max-width: 256px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  margin-top: 12px;
  margin-bottom: 16px;
`

export const CoffeeTag = styled.span`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border-radius: 100px;
  padding: 4px 8px;


  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;

  text-align: center;
`

export const CoffeeName = styled.span`
  font-family: 'Baloo 2', cursive;
  font-size: 20px;
  font-weight: 700;

  color: ${(props) => props.theme['base-subtitle']};
`

export const CoffeeDescription = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;

  color: ${(props) => props.theme['base-label']};
`

export const CoffeeCardFooter = styled.div`
  display: flex;
  max-width: 100%;

  align-items: center;
  justify-content: space-between;
`

export const CoffeePrice = styled.span`
  font-family: 'Baloo 2', cursive;
  font-size: 24px;
  font-weight: 800;

  color: ${(props) => props.theme['base-text']};
`

export const MoneySign = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;

  color: ${(props) => props.theme['base-text']};
  text-align: right;
  margin-right: 0.20rem;
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  padding: 8px;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};
`