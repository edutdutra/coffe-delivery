import styled from "styled-components";

export const CheckoutFormContainer = styled.div`
  border-radius: 6px;
`

export const BaseFormInput = styled.input`
  display: flex;
  padding: 12px;
  border-radius: 4px;
  align-items: center;

  font-size: 14px;
  margin-bottom: 16px;

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

export const StreetFormInput = styled(BaseFormInput)`
  width: 100%;
`

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`