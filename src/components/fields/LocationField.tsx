import { Field } from "formik";
import { LocationPicker } from "components";
import { useField } from "hooks";
import { FieldProps } from "types";

export const LocationField = ({
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

  return (
    <Field
      name={name}
      value={value}
      label={label}
      error={error && touched ? error : undefined}
      component={LocationPicker}
      onChange={(locValue: string) => setValue(locValue)}
    />
  );
};
