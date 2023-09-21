import { Incrementer } from "components/Incrementer";
import { Field } from "formik";
import { useField } from "hooks";
import { FieldProps } from "types";

export const IncrementerField = ({
  name,
  defaultValue,
  label,
  validate = () => undefined,
}: FieldProps<number>) => {
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
      component={Incrementer}
      onChange={(numValue: number) => setValue(numValue)}
    />
  );
};
