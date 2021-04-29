import Head from 'next/head'
import DefaultLayout from '../components/layouts/default'
import WeatherChart from '../components/charts/WeatherChart'

export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <title>Начало</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="row">
        <WeatherChart />
      </div>
    </DefaultLayout>
  )
}
