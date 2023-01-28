import store from '@/redux/store';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { createGlobalStyle } from 'styled-components';

// @ts-ignore
import globals from '@/styles/common.css';

const GlobalStyle = createGlobalStyle`
  ${globals};
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
