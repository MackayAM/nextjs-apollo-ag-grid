import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        color: string;
        background: string 
      }
      background: string;
      text: string;
      table: {
        headerBackground: string;
        oddRowBackground: string;
        background: string;
        headerText: string;
        text: string;
        selectedRowBackground: string;
      };
      card: {
        border: string;
        color: string;
        background: string;
      };
      scrollbar: {
        track: string;
        thumb: string;
        thumbHover: string;
      };
    };
  }
}