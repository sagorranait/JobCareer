import '@/styles/globals.css';
import TheHeader from '@/components/TheHeader';
import { store } from '../store';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <TheHeader/>
      <Component {...pageProps} />
    </Provider>
  );
}
