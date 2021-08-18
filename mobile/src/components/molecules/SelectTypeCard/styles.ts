import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity.attrs(
  ({ selected }: { selected: boolean }) => ({
    selected,
  })
)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.metrics.px(120)}px;
  width: ${({ theme }) => theme.metrics.baseWidth}px;
  border-width: ${({ theme, selected }) =>
    theme.metrics.px(selected ? 2 : 1)}px;
  border-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.grey};
  border-radius: ${({ theme }) => theme.metrics.px(8)}px;
  padding: ${({ theme }) => theme.metrics.px(8)}px;
`;

export const CheckView = styled.View`
  display: flex;
  width: 20%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const TextView = styled.View`
  display: flex;
  width: 80%;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
`;

export const CheckCircle = styled.View.attrs(
  ({ selected }: { selected: boolean }) => ({
    selected,
  })
)`
  height: ${({ theme }) => theme.metrics.px(24)}px;
  width: ${({ theme }) => theme.metrics.px(24)}px;
  border-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.grey};
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.background};
  border-width: ${({ theme }) => theme.metrics.px(2)}px;
  border-radius: ${({ theme }) => theme.metrics.px(12)}px;
`;
