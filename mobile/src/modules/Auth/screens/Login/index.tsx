import React from 'react';
import { AuthWrapper, Input, TextLink, Button } from '~/components';
import { ButtonContainer, ContentContainer } from './styles';

export const LoginScreen = () => {
  return (
    <AuthWrapper title="Bem-vindo(a) de volta!">
      <ContentContainer>
        <Input label="EMAIL" placeholder="example@email.com" />
        <Input mt={16} label="SENHA" placeholder="**************" />
        <TextLink text="Esqueceu sua senha?" mt={36} />
      </ContentContainer>
      <ButtonContainer>
        <Button>ENTRAR</Button>
        <Button mt={24} outline>
          CRIAR NOVA CONTA
        </Button>
      </ButtonContainer>
    </AuthWrapper>
  );
};
