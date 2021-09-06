import React, { useState } from 'react';
import { InputContainer, InputLabel, InputText, ErrorLabel } from './styles';
import { AllProps } from '~/types';

interface InputProps extends AllProps {
  label: string;
  placeholder: string;
  value?: string;
  onChangeText?: (value: string) => void;
  error?: string;
}

export const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  ...props
}: InputProps) => {
  const [focus, setFocus] = useState(false);
  return (
    <>
      <InputContainer pl={6} pt={2} pb={2} focus={focus} {...props}>
        <InputLabel>{label}</InputLabel>
        <InputText
          onFocus={() => setFocus(true)}
          onEndEditing={() => setFocus(false)}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
      </InputContainer>
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </>
  );
};
