import styled from 'styled-components/native';
import { AllProps } from '~/types';

export const BaseText = styled.Text.attrs((Props: AllProps) => {
  Props;
})`
  width: ${({ w }) => w || 'auto'};
  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
  margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 0)}px;
  margin-right: ${({ theme, mr }) => theme.metrics.px(mr || 0)}px;
  text-align: ${({ align }) => align || 'left'};
  font-family: ${({ theme, fontFamily }) =>
    theme.fonts[fontFamily || 'regular']};
  color: ${({ theme, color }) => theme.colors[color || 'greyDark']};
  font-size: ${({ theme, fontSize }) => theme.metrics.px(fontSize || 16)}px;
`;

export const Title = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(28)}px;
  font-family: '${({ theme }) => theme.fonts.bold}';
  color: ${({ theme }) => theme.colors.primary};
`;

export const CardTitle = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

export const RegularText = styled(BaseText)`
  font-size: ${({ theme, size }) => theme.metrics.px(size || 14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.greyDark};
`;

export const SemiBoldText = styled(BaseText)`
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.primary};
`;
