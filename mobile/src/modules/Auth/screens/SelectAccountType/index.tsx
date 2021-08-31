import React, { useState } from 'react';
import { AuthWrapper, SelectTypeCard, Button } from '~/components';
import { StackNavigationProp } from '@react-navigation/stack';

export const SelectAccountTypeScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<
    {
      ConfirmPhone: undefined;
    },
    'ConfirmPhone'
  >;
}) => {
  const [accountType, setAccountType] = useState('patient');

  const handleSelectAccountType = (type: string) => {
    setAccountType(type);
  };

  const goToConfirmPhone = () => {
    navigation.navigate('ConfirmPhone');
  };

  return (
    <AuthWrapper
      title="Escolha o tipo de conta"
      bottomChildren={<Button onPress={goToConfirmPhone}>PRÓXIMO</Button>}>
      <SelectTypeCard
        title="PACIENTE"
        description="Vou buscar as clínicas e médicos próximos a mim para agendar consultas e ter um histórico."
        selected={accountType === 'patient'}
        onPress={() => handleSelectAccountType('patient')}
      />
      <SelectTypeCard
        title="MÉDICO"
        description="Irei cadastrar meu perfil médico para anteder meus pacientes e ter um histórico destes."
        selected={accountType === 'doctor'}
        onPress={() => handleSelectAccountType('doctor')}
        mt={16}
      />
    </AuthWrapper>
  );
};
