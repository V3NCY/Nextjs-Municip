import Head from 'next/head'
import DefaultLayout from '../../components/layouts/default'
import HotelsList from "../../components/hotels/HotelList"

export default function AddHotel() {
    return (
        <DefaultLayout>
            <Head>
                <title>Добави хотел</title>
            </Head>
            <h1>Добави хотел</h1>
            <HotelsList/>
        </DefaultLayout>
    )
}