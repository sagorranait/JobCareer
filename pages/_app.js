import '@/styles/globals.css';
import { store } from '../store';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import TheHeader from '@/components/TheHeader';
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <SessionProvider session={pageProps.session}>
          <Toaster/>
          <TheHeader/>
          <Component {...pageProps} />
        </SessionProvider>
      </Provider>
  );
}