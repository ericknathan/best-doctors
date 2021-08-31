import React from 'react';
import {
  AuthWrapper,
  RegularText,
  Button,
  Input,
  BaseTouchContainer,
  SemiBoldText,
} from '~/components';
import { StackNavigationProp } from '@react-navigation/stack';

export const ConfirmPhoneScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<
    {
      CreateAccountSuccess: undefined;
    },
    'CreateAccountSuccess'
  >;
}) => {
  const goToSuccess = () => {
    navigation.navigate('CreateAccountSuccess');
  };

  return (
    <AuthWrapper
      title="Confirme seu celular"
      bottomChildren={<Button onPress={goToSuccess}>FINALIZAR</Button>}>
      <RegularText>
        Enviamos um código de 6 dígitos para o seu celular. Confirme-o digitando
        no campo abaixo.
      </RegularText>
      <Input label="CÓDIGO" placeholder="XXXXXX" mt={16} />
      <RegularText mt={16}>Não recebeu o código?</RegularText>
      <BaseTouchContainer direction="row" align="flex-end" h={24}>
        <SemiBoldText mr={2}>Clique aqui</SemiBoldText>
        <RegularText size={16}>para enviar novamente.</RegularText>
      </BaseTouchContainer>
    </AuthWrapper>
  );
};
