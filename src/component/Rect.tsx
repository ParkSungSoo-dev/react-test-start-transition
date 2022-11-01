import styled from '@emotion/styled'

interface RectProps {
  color: string;
  size?: number;
}

const Rect = ({color, size = 5}: RectProps) => {
  return <StyledRect size={size} color={color} />;
}

export default Rect;

const StyledRect = styled.div<RectProps>`
  display: inline-block;
  width: ${({size}) => `${size}px`};
  height: ${({size}) => `${size}px`};
  background-color: ${({color}) => color};
  margin: 5px;
`;