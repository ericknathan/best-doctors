import React, { ReactNode } from 'react';
import { Title } from '~/components/atoms';
import { Container } from './styles';

type Props = {
  children: ReactNode;
  title: string;
};

export const AuthWrapper = ({ children, title }: Props) => {
  return (
    <Container>
      {title && (
        <Title w="100%" mb={48}>
          {title}
        </Title>
      )}
      {children}
    </Container>
  );
};
