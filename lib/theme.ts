import { DefaultTheme, createGlobalStyle } from "styled-components";

export const defaultTheme: DefaultTheme = {
    colors: {
      primary: {
        color: '#1A1F33',
        background: '#1A1F33'
      },
      background: '#26314C',
      text: '#FFFFFF',
      table: {
        headerBackground: "#1C1C1C",
        oddRowBackground: "#1C1C1C",
        background: "#272727",
        headerText: "#DDDDDD",
        text: "#FFFFFF",
        selectedRowBackground: "#444444"
      },
      card: {
        background: '#1E253B',
        color: '#FFFFFF',
        border: '#26314C'
      },
      scrollbar: {
        track: '#26314C',
        thumb: '#384171',
        thumbHover: '#6579b4'
      }
    }
}

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: ${({theme}) => theme.colors.primary.color};
    --primary-background: ${({theme}) => theme.colors.primary.background};
    --color-table-header-background: ${({theme}) => theme.colors.table.headerBackground};
    --color-table-odd-row-background: ${({theme}) => theme.colors.table.oddRowBackground};
    --color-table-background: ${({theme}) => theme.colors.table.background};
    --color-table-header-text: ${({theme}) => theme.colors.table.headerText};
    --color-table-body-text: ${({theme}) => theme.colors.table.text};
    --color-table-selected-row-background: ${({theme}) => theme.colors.table.selectedRowBackground};
    --color-body-text: ${({theme}) => theme.colors.text};
    --color-card-background: ${({theme}) => theme.colors.card.background};
    --color-card-color: ${({theme}) => theme.colors.card.color};
    --color-card-border: ${({theme}) => theme.colors.card.border};
    --color-scrollbar-track: ${({theme}) => theme.colors.scrollbar.track};
    --color-scrollbar-thumb: ${({theme}) => theme.colors.scrollbar.thumb};
    --color-scrollbar-thumb-hover: ${({theme}) => theme.colors.scrollbar.thumbHover};
    --color-background: ${({theme}) => theme.colors.background};
    --color-chart-text: ${({theme}) => theme.colors.text};
  }
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`;