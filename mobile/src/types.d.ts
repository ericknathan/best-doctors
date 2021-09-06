import 'styled-components';
import { colors } from './styles/colors';
import { metrics } from './styles/metrics';
import { fonts } from './styles/fonts';

export interface AllProps {
  w?: number | string | '100%';
  h?: number | string;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  lh?: number;
  align?: string;
  fontFamily: keyof typeof fonts;
  fontSize: number;
  justify?: string;
  direction?: string;
  selected?: boolean;
  color: keyof typeof colors;
  bg: keyof typeof colors;
  br: number;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    metrics: typeof metrics;
    fonts: typeof fonts;
  }

  export interface ThemeProps<T> extends AllProps {}
  export interface IntrinsicAttributes extends AllProps {}
}

export interface Doctor {
  id?: number;
  name: string;
  specialty: string;
  avatar: string;
  rating: number;
}
