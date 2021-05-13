import Head from 'next/head'
import DefaultLayout from '../../components/layouts/default'

export default function Restaurants() {
    return (
        <DefaultLayout>
            <Head>
                <title>Ресторанти</title>
            </Head>
            <h1>Ресторанти</h1>
        </DefaultLayout>
    )
}