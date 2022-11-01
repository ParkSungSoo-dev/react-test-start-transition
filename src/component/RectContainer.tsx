import { ReactNode } from 'react'
import styled from '@emotion/styled'

interface RectContainerProps {
  children: ReactNode;
}

const RectContainer = ({children}: RectContainerProps) => {
  return <StyledReactContainer>{children}</StyledReactContainer>
};

export default RectContainer;

const StyledReactContainer = styled.div`
  width: 100%;
  min-height: 500px;
  border: 1px solid black;
`;