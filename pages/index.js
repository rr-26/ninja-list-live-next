import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name = "keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Hello</h1>
        <p className={styles.text}>This is a paragraph1</p>
        <p className={styles.text}>This is a paragraph2</p>
        <p className={styles.text}>This is a paragraph3</p>
        <p className={styles.text}>This is a paragraph4</p>
        <Link href = "/ninjas/">
          <a className={styles.btn}>This is Ninja List</a>
        </Link>
      </div>
    </>
  )
}
