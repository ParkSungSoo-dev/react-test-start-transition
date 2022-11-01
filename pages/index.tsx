import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Test react 18's new feature</title>
        <meta name="description" content="Test react 18's new feature" />
      </Head>

      <main>
        <ul>
          <li>
            <Link href={'/none'}>Without new feature</Link>
          </li>
          <li>
            <Link href={'/transition'}>With startTransition</Link>
          </li>
          <li>
            <Link href={'/deferred'}>With deferredValue</Link>
          </li>
        </ul>
      </main>
    </div>
  )
}
