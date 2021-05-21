import Head from 'next/head'
import RestaurantLayout from '../../components/layouts/restaurant'
import RestaurantsContainer from "../../components/restaurants/RestaurantsContainer"

export default function Restaurants() {
    return (
        <RestaurantLayout>
            <Head>
                <title>Ресторанти</title>
            </Head>
            <h1>Ресторанти</h1>
            <div className="restaurants"></div>
            <RestaurantsContainer />
        </RestaurantLayout>
    )
}