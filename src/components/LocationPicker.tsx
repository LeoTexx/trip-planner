import { useState } from "react";
import { InputProps } from "types";
import {
  Container,
  Error as ErrorWrapper,
  Label,
  LocationInputContainer,
  SelectorBackground,
  SelectorContainer,
  SelectorOption,
} from "styles/input";

import { ListSkeleton } from "components/ListSkeleton";
import { useLocation } from "hooks";

export const LocationPicker = ({
  value,
  label,
  error,
  onChange = () => {},
}: InputProps<string>) => {
  const { term, options, fetching, fetchError, setTerm } = useLocation(value);
  const [focused, setFocused] = useState(false);
  const errorMessage = fetchError || error;

  return (
    <Container>
      <Label>{label}</Label>
      <LocationInputContainer
        value={value === term ? value : term}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={({ target }) => {
          const newValue = target.value;
          if (newValue.length < value.length) {
            onChange("");
          }
          setTerm(newValue);
        }}
      />
      {focused && !fetchError && term && (
        <SelectorContainer>
          <SelectorBackground>
            {options.map((option, key) => (
              <SelectorOption
                key={key}
                onMouseDown={() => {
                  setTerm(option);
                  onChange(option);
                }}
              >
                {option}
              </SelectorOption>
            ))}
            {fetching && <ListSkeleton />}
          </SelectorBackground>
        </SelectorContainer>
      )}
      {errorMessage && <ErrorWrapper>{errorMessage}</ErrorWrapper>}
    </Container>
  );
};
