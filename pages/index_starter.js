import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation/Navigation'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Buraro Website</title>
        <meta name="description" content="This is just a starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation></Navigation>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
