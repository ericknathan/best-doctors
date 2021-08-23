import React, { useState } from 'react';
import { InputContainer, InputLabel, InputText } from './styles';
import { AllProps } from '~/styled';

interface InputProps extends AllProps {
  label: string;
  placeholder: string;
}

export const Input = ({ label, placeholder, ...props }: InputProps) => {
  const [focus, setFocus] = useState(false);
  return (
    <InputContainer pl={6} pt={2} pb={2} focus={focus} {...props}>
      <InputLabel>{label}</InputLabel>
      <InputText
        onFocus={() => setFocus(true)}
        onEndEditing={() => setFocus(false)}
        placeholder={placeholder}
      />
    </InputContainer>
  );
};
