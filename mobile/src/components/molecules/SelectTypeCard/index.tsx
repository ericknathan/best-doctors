import React from 'react';
import { CardContainer, TextView, CheckView, CheckCircle } from './styles';
import { CardTitle, RegularText } from '../../atoms';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { metrics } from '~/styles/metrics'

type Props = {
  selected: boolean;
  title: string;
  description: string;
  onPress?: () => void;
};

export const SelectTypeCard = ({
  selected,
  title,
  description,
  onPress,
  ...props
}: Props) => {
  return (
    <CardContainer onPress={onPress} selected={selected} {...props}>
      <CheckView>
        <CheckCircle selected={selected}>
          <Icon name="check" size={metrics.px(16)} color="white" />
        </CheckCircle>
      </CheckView>
      <TextView>
        <CardTitle>{title}</CardTitle>
        <RegularText>{description}</RegularText>
      </TextView>
    </CardContainer>
  );
};
