import '../scss/styles.scss';
import Head from 'next/head';
import NavBar from '../components/navbar'

export default function({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Jacar</title>
      </Head>
      <NavBar></NavBar>
      <div className="page">
        <Component {...pageProps} />
      </div>
      <footer className="footer">
        <div className="content has-text-centered">
          Powered by <img src="/favicon-96x96.png" alt="Jacar Logo" width="20"/> Jacar
        </div>
      </footer>
    </div>
  );
}

