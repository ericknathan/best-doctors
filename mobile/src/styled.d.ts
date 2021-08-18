import 'styled-components';
import { colors } from './styles/colors';
import { metrics } from './styles/metrics';
import { fonts } from './styles/fonts';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    metrics: typeof metrics;
    fonts: typeof fonts;
  }
}
