import React from 'react';
import {
  BaseBackground,
  Title,
  TextOpen,
  Avatar,
  CardTitle,
} from '~/components';
import {
  HeaderContainer,
  HeaderTextContainer,
  HeaderImageContainer,
} from './styles';

export const HomeScreen = () => {
  return (
    <BaseBackground>
      <HeaderContainer>
        <HeaderTextContainer>
          <Title>Olá, Erick</Title>
          <TextOpen>Carapicuíba, SP</TextOpen>
        </HeaderTextContainer>
        <HeaderImageContainer>
          <Avatar
            source={{
              uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            }}
          />
        </HeaderImageContainer>
      </HeaderContainer>
      <CardTitle ml={24} mt={32}>
        MÉDICOS PRÓXIMOS
      </CardTitle>
    </BaseBackground>
  );
};
