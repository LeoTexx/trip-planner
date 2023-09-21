import { useMemo } from "react";
import { Field } from "formik";
import moment from "moment";
import { DatePicker } from "components";
import { useField } from "hooks";
import { FieldProps } from "types";

export const DateField = ({
  name,
  defaultValue,
  label,
  validate = () => undefined,
}: FieldProps<string>) => {
  const { value, touched, error, setValue } = useField({
    name,
    defaultValue,
    validate,
  });
  const isValidDate = useMemo(
    () => moment(defaultValue).isValid(),
    [defaultValue]
  );

  if (defaultValue !== "" && !isValidDate) {
    return <div>Invalid Date</div>;
  }

  return (
    <Field
      name={name}
      value={value}
      label={label}
      error={error && touched ? error : undefined}
      component={DatePicker}
      onChange={(dateValue: string) => setValue(dateValue)}
    />
  );
};
