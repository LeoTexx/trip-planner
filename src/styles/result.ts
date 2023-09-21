import styled from "styled-components";

interface ContentProps {
  visible: boolean;
  centralize?: boolean;
}

export const Content = styled.div<ContentProps>`
  display: ${({ visible }) => (visible ? "block" : "none")};
  ${({ centralize, visible }) =>
    centralize && visible
      ? `
    display: flex;
    align-items: center;
    justify-content: center;
  `
      : ""}
`;

export const Info = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  & b {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const Balloon = styled.div`
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 10px 20px;
  max-width: 100px;
  display: inline-flex;
`;

export const LeftCol = styled.div`
  padding-top: 20px;
  text-align: right;
  flex: 1;
`;

export const MiddleCol = styled.div`
  width: 50px;
  position: relative;
`;

export const RightCol = styled.div`
  flex: 1;
  text-align: left;
`;

export const ErrorContainer = styled.div`
  text-align: center;
`;

export const ErrorMessage = styled.p`
  margin-top: 100px;
  margin-bottom: 100px;
  font-weight: bold;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
`;
