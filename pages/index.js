import Head from 'next/head'
import Image from 'next/image'
import mansion from '../public/images/mansion-650-650.jpg'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Marley &amp; Marley </title>
        <meta name="description" content="Wealth Management &amp; Tax Advisory Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.landingPage}>
        <div>
          <h1>Accouting &amp; Tax Advisors</h1>
          <h2>Specialising in wealth &amp; estate management for high net worth individuals</h2>
        </div>

        <div className={styles.landingPageImageContainer}>
          <Image
            className={styles.landingPageImage}
            src={mansion}
            alt="Picture of mansion"
          />
        </div>
      </section>
    </div>
  )
}
