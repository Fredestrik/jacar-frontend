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
      <Component {...pageProps} />
      <footer className="footer">
        <div className="content has-text-centered">
          Powered by <a href="/about" ><img src="/favicon-96x96.png" alt="Jacar Logo" width="20"/> Jacar </a>
        </div>
      </footer>
    </div>
  );
}

