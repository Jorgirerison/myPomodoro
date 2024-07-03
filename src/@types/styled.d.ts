import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

// guardando a tipagem inferida pelo ts dentro dessa variável
type ThemeType = typeof defaultTheme

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}