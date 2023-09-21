import styled, { css } from "styled-components";
import { IconSpinner } from "styles/icons";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

export const Button = ({ loading, children, ...props }: Props) => {
  return (
    <Container {...props} aria-busy={loading ? "true" : "false"}>
      {loading ? <IconSpinner /> : children}
    </Container>
  );
};

const Container = styled.button<Props>`
  background-color: ${({ theme }) => theme.colors.button};
  border: 1px solid ${({ theme }) => theme.colors.muted};
  color: ${({ theme }) => theme.colors.buttonFont};
  border-radius: 4px;
  font-size: 14px;
  padding: 8px 12px;
  cursor: pointer;
  transition: opacity 100ms ease-in-out;
  position: relative;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.9;
  }

  ${({ disabled, loading, theme }) =>
    (disabled || loading) &&
    css`
      background-color: ${theme.colors.muted};
      cursor: not-allowed;
    `}
`;
