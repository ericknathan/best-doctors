import React, { ReactNode } from 'react';
import { ButtonContainer, TextButton } from './styles';
import { AllProps } from '~/styled';

interface Props extends AllProps {
  children: ReactNode;
  outline?: boolean;
}

export const Button = ({ children, outline, ...props }: Props) => {
  return (
    <ButtonContainer outline={outline} {...props}>
      <TextButton outline={outline}>
        {String(children).toUpperCase()}
      </TextButton>
    </ButtonContainer>
  );
};
