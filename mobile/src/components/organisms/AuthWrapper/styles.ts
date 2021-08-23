import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-vertical: ${({ theme }) => theme.metrics.px(48)}px;
  padding-horizontal: ${({ theme }) => theme.metrics.px(24)}px;
`;
