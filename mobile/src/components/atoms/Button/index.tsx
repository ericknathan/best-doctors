import React, { ReactNode } from 'react';
import { ButtonContainer, TextButton } from './styles';

type Props = {
  children: ReactNode;
  outline: boolean;
};

export const Button = ({ children, outline }: Props) => {
  return (
    <ButtonContainer outline={outline}>
      <TextButton outline={outline}>
        {String(children).toUpperCase()}
      </TextButton>
    </ButtonContainer>
  );
};
