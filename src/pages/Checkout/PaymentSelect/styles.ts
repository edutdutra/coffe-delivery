import styled from "styled-components";

export const PaymentSelectContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const BasePaymentOption = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 6px;
  
  width: 100%;
  max-width: 178px;

  cursor: pointer;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['purple']};

  span {
    font-size: 12px;
    text-transform: uppercase;

    color: ${(props) => props.theme['base-text']};

    &:hover {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  &.active {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme['purple']};
  }
`
