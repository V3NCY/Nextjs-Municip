import Head from 'next/head'
import HomeLayout from '../components/layouts/Home'

export default function Home() {

  return (
    <HomeLayout>
      <Head>
        <title>Начало</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </HomeLayout>
  )
}
