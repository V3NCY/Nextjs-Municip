import Head from 'next/head'
import DefaultLayout from '../../components/layouts/default'
// import HotelsList from "../../components/hotels/HotelList"
// import Rating from "../../components/hotels/rating"
// import HotelItem from "../../components/hotels/HotelItem"

export default function AddHotel() {
    return (
        <DefaultLayout>
            <Head>
                <title>Добави хотел</title>
            </Head>
            <h1>Добави хотел</h1>
            {/* <HotelsList /> */}
            {/* <Rating /> */}
            {/* <HotelItem/> */}
        </DefaultLayout>
    )
}