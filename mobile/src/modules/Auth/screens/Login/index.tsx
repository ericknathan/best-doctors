import React from 'react';
import { AuthWrapper, Input, TextLink, Button } from '~/components';
import { ButtonContainer, ContentContainer } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';

export const LoginScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<
    {
      CreateAccount: undefined;
    },
    'CreateAccount'
  >;
}) => {
  const goToCreateAccount = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <AuthWrapper title="Bem-vindo(a) de volta!">
      <ContentContainer>
        <Input label="EMAIL" placeholder="example@email.com" />
        <Input mt={16} label="SENHA" placeholder="**************" />
        <TextLink text="Esqueceu sua senha?" mt={36} />
      </ContentContainer>
      <ButtonContainer>
        <Button>ENTRAR</Button>
        <Button mt={24} outline onPress={goToCreateAccount}>
          CRIAR NOVA CONTA
        </Button>
      </ButtonContainer>
    </AuthWrapper>
  );
};
