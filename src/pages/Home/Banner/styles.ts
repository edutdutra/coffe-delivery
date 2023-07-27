import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  margin-bottom: 6rem;
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 48px;
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  line-height: 130%;
  align-self: stretch;

  color: ${(props) => props.theme['base-title']};
  margin-bottom: 1rem;
`

export const Subtitle = styled.h2`
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 4rem;
`

export const BannerItemsContainer = styled.div`
  display: flex;
  gap: 2.5rem;
`

export const BannerItemsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const BannerItem = styled.div`
  display: flex;
  align-items: center;
`