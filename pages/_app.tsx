import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../layout/Layout';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
