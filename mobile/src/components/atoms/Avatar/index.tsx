import styled from 'styled-components/native';

export const Avatar = styled.Image`
  width: ${({ theme }) => theme.metrics.px(70)}px;
  height: ${({ theme }) => theme.metrics.px(70)}px;
  border-radius: ${({ theme }) => theme.metrics.px(12)}px;
`;
