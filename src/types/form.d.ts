export interface FormValues {
  origin: string;
  destinations: { [key: string]: string };
  passengers: number;
  date: string;
}

export interface DefaultFormValues {
  cities: string[];
  passengers: number;
  date: string;
}

export type FieldProps<T> = {
  name: string;
  defaultValue: T;
  label: string;
  validate?: (value: T) => string | undefined;
};

export interface InputProps<T> {
  value: T;
  label: string;
  error?: string;
  onChange?: (option: T) => any;
}
