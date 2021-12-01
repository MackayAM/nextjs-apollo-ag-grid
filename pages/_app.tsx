import '../styles/global.sass';

import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import ModalProvider from 'mui-modal-provider';

import { defaultTheme, GlobalStyles } from '../lib/theme';

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from '@apollo/client';

const httpLink = createHttpLink({ uri: 'https://rickandmortyapi.com/graphql' });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ModalProvider beta={true}>
          <Component {...pageProps} />
        </ModalProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
