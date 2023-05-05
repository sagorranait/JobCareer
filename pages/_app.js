import '@/styles/globals.css';
import { store } from '../store';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react'
import TheHeader from '@/components/TheHeader';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <SessionProvider session={pageProps.session}>
          <TheHeader/>
          <Component {...pageProps} />
        </SessionProvider>
      </Provider>
  );
}
