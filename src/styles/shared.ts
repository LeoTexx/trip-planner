import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0px 5px 25px -15px #00000099;
  max-width: 750px;
  margin: auto;
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: ${({ theme }) => theme.backgroundOpacity};
  background-image: url("/gradient.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const DotSeparator = styled.div<{ size: number }>`
  border-left: 2px dotted ${({ theme }) => theme.colors.font};
  left: calc(50% - 1px);
  position: absolute;
  height: ${({ size }) => `${size}px`};
`;
