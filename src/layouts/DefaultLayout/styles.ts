import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 95rem;
  height: calc(100vh - 2rem);
  padding: 2.5rem;
  margin: 0 10rem;

  background: ${(props) => props.theme['background']};
`