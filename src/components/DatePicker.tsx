import { Calendar } from "components";
import moment from "moment";
import React, { useMemo, useState } from "react";
import { Container, Error, Label, DateInputContainer } from "styles/input";
import { InputProps } from "types";

export const DatePicker = ({
  value,
  label,
  error,
  onChange = () => {},
}: InputProps<string>) => {
  const [focused, setFocused] = useState(false);
  const formattedDate = useMemo(() => {
    if (!value) return "";
    return moment(value).format("MM/DD/YYYY");
  }, [value]);

  return (
    <Container>
      <Label>{label}</Label>
      <DateInputContainer onClick={() => setFocused(true)}>
        {formattedDate}
      </DateInputContainer>
      {focused && (
        <Calendar
          date={value}
          onChoose={(date) => {
            onChange(date);
            setFocused(false);
          }}
          onClose={() => setFocused(false)}
        />
      )}
      {error && <Error>{error}</Error>}
    </Container>
  );
};
