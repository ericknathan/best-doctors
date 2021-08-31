import React from 'react';
import { AuthWrapper, Input, Button } from '~/components';
import { StackNavigationProp } from '@react-navigation/stack';

export const CreateAccountScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<
    {
      SelectAccountType: undefined;
    },
    'SelectAccountType'
  >;
}) => {
  const goToSelectAccountType = () => {
    navigation.navigate('SelectAccountType');
  };

  return (
    <AuthWrapper
      title="Crie sua conta"
      bottomChildren={<Button onPress={goToSelectAccountType}>PRÓXIMO</Button>}>
      <Input label="NOME" placeholder="Seu nome" />
      <Input label="EMAIL" mt={16} placeholder="meu.email@exemplo.com" />
      <Input label="CELULAR" mt={16} placeholder="(XX) X XXXX-XXXX" />
      <Input label="SENHA" mt={16} placeholder="**************" />
      <Input label="CONFIRMAR SENHA" mt={16} placeholder="**************" />
    </AuthWrapper>
  );
};
