import styled from "styled-components";

const ICON_COLOR = {
    yellowDark: 'yellow-dark',
    purple: 'purple'
} as const

export interface CheckoutCardHeaderProps {
    iconColor: keyof typeof ICON_COLOR
}

export const CheckoutContainer = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  form {
    display: flex;
    padding: 4rem 0;
    gap: 32px;
  }
`
export const CheckoutColumn = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;
`

export const CheckoutTitle = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-size: 1.125rem;
  font-weight: 700;
`

export const CheckoutBaseCard = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  max-width: 640px;
  
  
  padding: 2.5rem;
  gap: 2rem;
`

export const CheckoutCardHeader = styled.div<CheckoutCardHeaderProps>`
  display: flex;

  color: ${(props) => props.theme[ICON_COLOR[props.iconColor]]};
  gap: 8px;

  div {
    display: flex;
    flex-direction: column !important;

    h2 {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 16px;
      font-weight: 400;
    }

    span {
      color: ${(props) => props.theme['base-text']};
      font-size: 14px;
      font-weight: 400;
    }
`