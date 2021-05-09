import Head from 'next/head'
import DefaultLayout from '../../components/layouts/default'
import CreateHotel from "../../components/hotels/create-hotel"
import HotelItem from "../../components/hotels/HotelItem"
import { useSelector, useDispatch } from "react-redux"
import { getHotels } from "../../redux/actions"
import { useEffect } from "react"

//TODO Improve the hotel listing !
// create hotel component and import here !
export default function AddHotel(props) {

    const hotels = useSelector(state => state.hotels);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHotels());
    }, []);

    const getHotelsList = () => {
        if (!hotels) {
            return null;
        }
        const hotelsList = hotels.map(hotel => {
            //TODO render hotel component instead of just div and pass data as props to it          ?  
            return <HotelItem
                key={hotel._id}
                title={hotel.title}
                description={hotel.description}
                extras={hotel.extras}
                rating={hotel.rating}
                image={hotel.image}
            ></HotelItem>
        })
        return hotelsList;

    }

    return (
        <DefaultLayout>
            <Head>
                <title>Добави хотел</title>
            </Head>
            <h1>Добави хотел</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <CreateHotel />
                    </div>

                    <div className="col">
                        <div className="mb-2">Списък с хотели:</div>
                        {getHotelsList()}

                    </div>
                </div>
            </div>


        </DefaultLayout>
    )
}