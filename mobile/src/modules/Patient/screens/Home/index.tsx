import React from 'react';
import { BaseBackground, Title, TextOpen } from '~/components';
import { HeaderContainer } from './styles';

export const HomeScreen = () => {
  return (
    <BaseBackground>
      <HeaderContainer>
        <Title>Olá, Erick</Title>
        <TextOpen>Carapicuíba, SP</TextOpen>
      </HeaderContainer>
    </BaseBackground>
  );
};
