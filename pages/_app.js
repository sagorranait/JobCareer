import TheHeader from '@/components/TheHeader';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <TheHeader/>
      <Component {...pageProps} />
    </>
  );
}
