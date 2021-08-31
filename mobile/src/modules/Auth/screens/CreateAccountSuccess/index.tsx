import React from 'react';
import { AuthWrapper, Title, Button } from '~/components';
import { Container, SuccessImg } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';

export const CreateAccountSuccessScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<
    {
      Homepage: undefined;
    },
    'Homepage'
  >;
}) => {
  const goToHomepage = () => {
    navigation.navigate('Homepage');
  };

  return (
    <AuthWrapper
      bottomChildren={<Button onPress={goToHomepage}>ACESSAR O APP</Button>}>
      <Container>
        <SuccessImg
          source={require('~/assets/lottie/success-check.json')}
          loop={false}
          autoPlay
        />
        <Title align="center" mt={16}>
          Conta criada com sucesso!
        </Title>
      </Container>
    </AuthWrapper>
  );
};
