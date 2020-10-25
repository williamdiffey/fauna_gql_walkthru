import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Next Fauna GraphQL CRUD</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div className={styles.container}>{children}</div>
    </main>
  </>
);

export default Layout;