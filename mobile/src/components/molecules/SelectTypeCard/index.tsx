import React from 'react';
import { CardContainer, TextView, CheckView, CheckCircle } from './styles';
import { CardTitle, RegularText } from '../../atoms';

type Props = {
  selected: boolean;
  title: string;
  description: string;
};

export const SelectTypeCard = ({ selected, title, description }: Props) => {
  return (
    <CardContainer selected={selected}>
      <CheckView>
        <CheckCircle selected={selected} />
      </CheckView>
      <TextView>
        <CardTitle>{title}</CardTitle>
        <RegularText>{description}</RegularText>
      </TextView>
    </CardContainer>
  );
};
