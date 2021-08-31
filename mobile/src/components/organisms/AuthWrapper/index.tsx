import React, { ReactNode, Element } from 'react';
import { Title } from '~/components/atoms';
import { Container, ButtonContainer, ContentContainer } from './styles';

type Props = {
  children?: ReactNode;
  title?: string;
  bottomChildren?: Element;
};

export const AuthWrapper = ({ children, title, bottomChildren }: Props) => {
  return (
    <Container>
      <ContentContainer>
        {title && (
          <Title w="100%" mb={48}>
            {title}
          </Title>
        )}
        {children}
      </ContentContainer>
      <ButtonContainer>{bottomChildren}</ButtonContainer>
    </Container>
  );
};
