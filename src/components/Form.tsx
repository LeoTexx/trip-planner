import React, { ReactNode, useEffect } from "react";
import { Formik, Form as FormikForm, useFormikContext } from "formik";
import { FormValues } from "types";

interface Props {
  children: ReactNode;
  onSubmit: (data: FormValues) => Promise<void> | void;
  onUpdate?: (data: FormValues) => Promise<void> | void;
}

const FormContent = ({
  onUpdate,
  children,
}: {
  onUpdate: (data: FormValues) => Promise<void> | void;
  children: ReactNode;
}) => {
  const { values } = useFormikContext<any>();

  useEffect(() => {
    onUpdate(values);
  }, [values]);

  return <>{children}</>;
};

export const Form = ({ onSubmit, onUpdate = () => {}, children }: Props) => {
  return (
    <Formik
      initialValues={{ origin: "", destinations: {}, passengers: 1, date: "" }}
      onSubmit={onSubmit}
      validateOnBlur
      validateOnChange
    >
      <FormikForm>
        <FormContent onUpdate={onUpdate}>{children}</FormContent>
      </FormikForm>
    </Formik>
  );
};
