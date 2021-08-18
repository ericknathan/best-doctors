import React, { useState } from 'react';
import { InputContainer, InputLabel, InputText } from './styles';

type Props = {
  label: string;
  placeholder: string;
};

export const Input = ({ label, placeholder }: Props) => {
  const [focus, setFocus] = useState(false);
  return (
    <InputContainer focus={focus}>
      <InputLabel>{label}</InputLabel>
      <InputText
        onFocus={() => setFocus(true)}
        onEndEditing={() => setFocus(false)}
        placeholder={placeholder}
      />
    </InputContainer>
  );
};
