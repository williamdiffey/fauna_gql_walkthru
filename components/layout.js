import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'

const Layout = ({ children }) => (
  <>
    <Head>
      <title>NFGQL Template</title>

      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Header />
    <main>
      <div className={styles.container}>{children}</div>
    </main>
  </>
)

export default Layout
