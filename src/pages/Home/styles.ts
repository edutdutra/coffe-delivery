import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  flex-direction: column;
  
  padding: 6rem 0;
`


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

const CIRCLE_COLORS = {
    yellow: 'yellow',
    yellowDark: 'yellow-dark',
    gray: 'base-text',
    purple: 'purple'
}

interface IconCircleProps {
    circleColor: keyof typeof CIRCLE_COLORS
}

export const IconCircle = styled.div<IconCircleProps>`
  width: 2rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.75rem;

  background: ${(props) => props.theme[CIRCLE_COLORS[props.circleColor]]};
  color: ${(props) => props.theme['background']};

  border-radius: 1000px;
`