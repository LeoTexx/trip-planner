import React, { useCallback } from "react";
import { Incrementer as IncrementerStyle } from "styles/input";
import { InputProps } from "types";
import { Container, Error, Label } from "styles/input";

export const Incrementer = ({
  value,
  label,
  error,
  onChange = () => {},
}: InputProps<number>) => {
  const decrease = useCallback(() => {
    if (value > 0) {
      onChange(value - 1);
    }
  }, [value, onChange]);

  const increase = useCallback(() => {
    onChange(value + 1);
  }, [value, onChange]);

  return (
    <Container>
      <Label>{label}</Label>
      <IncrementerStyle.Wrapper>
        <IncrementerStyle.Button type={"button"} onClick={() => decrease()}>
          -
        </IncrementerStyle.Button>
        <IncrementerStyle.Quantity>{value}</IncrementerStyle.Quantity>
        <IncrementerStyle.Button type={"button"} onClick={() => increase()}>
          +
        </IncrementerStyle.Button>
      </IncrementerStyle.Wrapper>
      {error && <Error>{error}</Error>}
    </Container>
  );
};
