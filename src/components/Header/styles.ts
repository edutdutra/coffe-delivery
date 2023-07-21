import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
`
export const LocationContainer = styled.div`
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme['purple']};
  background: ${(props) => props.theme['purple-light']};

  padding: 8px;
  gap: 0.25rem;
  border-radius: 6px;
  
  span {
    color: ${(props) => props.theme['purple-dark']};
    font-size: 14px;
  }
`

export const CartContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};

  border-radius: 6px;
`