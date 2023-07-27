import styled from "styled-components";

const CIRCLE_COLORS = {
    yellow: 'yellow',
    yellowDark: 'yellow-dark',
    gray: 'base-text',
    purple: 'purple'
} as const

export interface IconCircleProps {
    circleColor: keyof typeof CIRCLE_COLORS
}

export const IconCircleContainer = styled.div<IconCircleProps>`
  width: 2rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.75rem;
  padding: 8px;

  background: ${(props) => props.theme[CIRCLE_COLORS[props.circleColor]]};
  color: ${(props) => props.theme['background']};

  border-radius: 1000px;
`