import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  padding-horizontal: ${({ theme }) => theme.metrics.px('16')}px;
`;
