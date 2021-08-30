import React, { ReactNode } from 'react';
import { ButtonContainer, TextButton } from './styles';
import { AllProps } from '~/styled';

interface Props extends AllProps {
  children: ReactNode;
  outline?: boolean;
  onPress?: () => void;
}

export const Button = ({ children, outline, onPress, ...props }: Props) => {
  return (
    <ButtonContainer outline={outline} {...props}>
      <TextButton outline={outline} onPress={onPress}>
        {String(children).toUpperCase()}
      </TextButton>
    </ButtonContainer>
  );
};
