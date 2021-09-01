import React, { ReactNode } from 'react';
import { BaseText } from '../Text';
import { MainContainer } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '~/styles/colors';

interface Props {
  children: ReactNode;
}

export const TextOpen = ({ children }: Props) => {
  return (
    <MainContainer>
      <BaseText fontFamily="medium" fontSize={14}>
        {children}
      </BaseText>
      <Icon name="chevron-down-outline" size={16} color={colors.primary} />
    </MainContainer>
  );
};
