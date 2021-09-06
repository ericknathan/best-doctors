import React from 'react';
import { BaseTouchContainer } from '../Container';
import { CardTitle } from '../Text';
import { AllProps } from '~/types';

interface Props extends AllProps {
  text: string;
  onPress?: () => void;
}

export const TextLink = ({ text, onPress, ...props }: Props) => {
  return (
    <BaseTouchContainer
      align="flex-end"
      h={24}
      justify="flex-end"
      onPress={onPress}
      {...props}>
      <CardTitle>{text}</CardTitle>
    </BaseTouchContainer>
  );
};
