import { Caption1, Label, Select as FluentUiSelect, SelectProps } from "@fluentui/react-components";
import { useFormError } from "./hooks/useFormError";
import { formStyles } from "./styles";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export function Select(props: Props) {
  const styles = formStyles();
  const error = useFormError(props.name);
  const { control } = useFormContext();

  return (
    <section className={styles.input}>
      <Label htmlFor={props.name}>{props.label ?? props.name}</Label>
      <Controller
        render={({ field }) => (
          <FluentUiSelect {...field} id={props.name}>
            <option value="" disabled>
              -
            </option>
            {props.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </FluentUiSelect>
        )}
        control={control}
        {...props}
      />
      {error && <Caption1 className={styles.error}>{error}</Caption1>}
    </section>
  );
}

type Option = {
  label: string;
  value: string;
};

type Props = SelectProps & {
  name: string;
  label?: string;
  disabed?: boolean;
  options: Array<Option>;
};
