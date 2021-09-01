import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-horizontal: ${({ theme }) => theme.metrics.px(24)}px;
`;

export const HeaderTextContainer = styled.View`
  display: flex;
  width: 70%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const HeaderImageContainer = styled.View`
  display: flex;
  width: 30%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;
