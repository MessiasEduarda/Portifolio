import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      white: string;
      default: string;
      // Adicione outras cores que você usa no seu tema
    };
  }
}