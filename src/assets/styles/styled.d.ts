import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string,
      purple: string,
      gray: {
        dark: string,
        medium: string,
      },
      white: {
        background: string,
        details: string,
        pure: string,
      },
      pink: {
        dark: string,
        light: string,
      },
    },
  }
}
