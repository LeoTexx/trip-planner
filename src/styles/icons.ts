import { BiCircle } from "react-icons/bi";
import { RiMapPin2Line } from "react-icons/ri";
import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const IconSpinner = styled.div`
  border: 8px solid ${({ theme }) => theme.colors.background};
  border-top: 8px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spinAnimation} 2s linear infinite;
  position: relative;
`;

export const IconStep = styled(BiCircle)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.font};
`;

export const IconPin = styled(RiMapPin2Line)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.danger};
`;
