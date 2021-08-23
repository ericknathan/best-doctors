import styled from 'styled-components/native';
import { BaseTouchContainer } from '../Container';

export const ButtonContainer = styled(BaseTouchContainer).attrs(
  ({ outline }: { outline: boolean }) => ({
    outline,
  })
)`
  background-color: ${({ theme, outline }) =>
    outline ? theme.colors.background : theme.colors.primary};
  height: ${({ theme }) => theme.metrics.px(56)}px;
  width: ${({ theme }) => theme.metrics.baseWidth}px;
  border-radius: ${({ theme }) => theme.metrics.px(50)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: ${({ theme }) => theme.metrics.px(2)}px;
  border-color: ${({ theme }) => theme.colors.primary};
`;

export const TextButton = styled.Text.attrs(
  ({ outline }: { outline: boolean }) => ({
    outline,
  })
)`
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  color: ${({ theme, outline }) =>
    outline ? theme.colors.primary : theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
