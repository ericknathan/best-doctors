import React from 'react';
import { BaseText } from '~/components/atoms';
import { CardContainer } from './styles';

type Props = {
  text: string;
  selected?: boolean;
};

export const SpecialtyCard = ({ text, selected }: Props) => (
  <CardContainer>
    <BaseText
      size={14}
      fontFamily="medium"
      color={selected ? 'primary' : 'grey'}>
      {text}
    </BaseText>
  </CardContainer>
);
