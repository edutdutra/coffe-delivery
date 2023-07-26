import styled from "styled-components";

export const InputNumberContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 6px;
  padding: 8px;
  gap: 4px;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['purple']};
`
export const InputNumberField = styled.input`
  background: transparent;
  border: 0;

  color: ${(props) => props.theme['base-title']};

  max-width: 20px;
  
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  
  outline: none;

  &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${(props) => props.theme['base-title']};
  }
`

export const InputNumberButton = styled.button`
  color: ${(props) => props.theme['purple']};
  background: ${(props) => props.theme['base-button']};

  border: 0;

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`