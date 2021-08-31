import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { AuthWrapper, Input, Button } from '~/components';
import { useAuthStore } from '~/services/store';
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
  const { setUser } = useAuthStore();

  const goToSelectAccountType = () => {
    navigation.navigate('SelectAccountType');
  };

  const { values, handleSubmit, setFieldValue, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required('Nome é obrigatório')
        .min(3, 'Nome deve ter no mínimo 3 caractéres'),
      email: Yup.string()
        .required('E-mail é obrigatório')
        .email('E-mail inválido'),
      phoneNumber: Yup.string()
        .required('Número de telefone é obrigatório')
        .min(16, 'Celular inválido'),
      password: Yup.string()
        .required('Senha é obrigatória')
        .min(6, 'Senha deve ter no mínimo 6 caractéres'),
      confirmPassword: Yup.string()
        .required('Confirmação de Senha é obrigatória')
        .min(6, 'Confirmação de Senha deve ter no mínimo 6 caractéres')
        .oneOf([Yup.ref('password'), null], 'Senhas não coincidem'),
    }),
    onSubmit: (props: any) => {
      setUser(props);
      goToSelectAccountType();
    },
  });

  return (
    <AuthWrapper
      title="Crie sua conta"
      bottomChildren={<Button onPress={handleSubmit}>PRÓXIMO</Button>}>
      <Input
        label="NOME"
        value={values.name}
        onChangeText={(text: string) => setFieldValue('name', text)}
        error={errors.name}
        placeholder="Seu nome"
      />
      <Input
        label="EMAIL"
        value={values.email}
        onChangeText={(text: string) => setFieldValue('email', text)}
        error={errors.email}
        mt={16}
        placeholder="meu.email@exemplo.com"
      />
      <Input
        label="CELULAR"
        value={values.phoneNumber}
        onChangeText={(text: string) => setFieldValue('phoneNumber', text)}
        error={errors.phoneNumber}
        mt={16}
        placeholder="(XX) X XXXX-XXXX"
      />
      <Input
        label="SENHA"
        value={values.password}
        onChangeText={(text: string) => setFieldValue('password', text)}
        error={errors.password}
        mt={16}
        placeholder="**************"
      />
      <Input
        label="CONFIRMAR SENHA"
        value={values.confirmPassword}
        onChangeText={(text: string) => setFieldValue('confirmPassword', text)}
        error={errors.confirmPassword}
        mt={16}
        placeholder="**************"
      />
    </AuthWrapper>
  );
};
