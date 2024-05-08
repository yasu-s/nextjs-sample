import Head from 'next/head'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <Head>
        <title>Menu</title>
      </Head>
      <main>
        <h2>Menu</h2>
        <Link href="/">Home</Link>
      </main>
    </>
  )
}
