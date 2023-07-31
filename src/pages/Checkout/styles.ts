import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  padding: 4rem 0;
  
  flex-direction: column;
`

export const CheckoutTitle = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-size: 1.125rem;
  font-weight: 700;
`

export const AddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  form {
    background: ${(props) => props.theme['base-card']};
    padding: 4.5rem;
    border-radius: 6px;
    
    div {
      display: flex;
      flex-direction: row;
    }
  }
`

export const AddressFormHeader = styled.div`
  display: flex;
  flex-direction: row;

  align-items: start;
  gap: 8px;
  margin-bottom: 32px;

  color: ${(props) => props.theme['yellow-dark']};

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
  }
`

export const BaseFormInput = styled.input`
  display: flex;
  padding: 12px;
  border-radius: 4px;
  align-items: center;
  
  font-size: 14px;
  
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  
  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
    outline: none;
  }
  
  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

