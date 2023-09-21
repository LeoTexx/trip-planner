import { useEffect, useCallback } from "react";
import { useField as useFormikField } from "formik";

interface Props {
  name: string;
  defaultValue?: unknown;
  validate?: (value: any) => any | Promise<any>;
}

export const useField = ({
  name,
  defaultValue,
  validate = () => undefined,
}: Props) => {
  const validateMemoized = useCallback(validate, []);

  const [_field, meta, helpers] = useFormikField({
    name,
    validate: validateMemoized,
  });

  useEffect(() => {
    if (meta.value === undefined && defaultValue !== undefined) {
      helpers.setValue(defaultValue);
    }
  }, [defaultValue, meta.value]);

  useEffect(() => {
    return () => {
      helpers.setValue(undefined);
    };
  }, []);

  return {
    value: meta.value || defaultValue,
    touched: meta.touched,
    error: meta.error,
    setValue: helpers.setValue,
  };
};
