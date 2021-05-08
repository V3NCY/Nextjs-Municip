import Head from 'next/head'
import DefaultLayout from '../../components/layouts/default'
// import CreateHotel from "../../components/hotels/create-hotel"
import { useSelector, useDispatch } from "react-redux"
import { getHotels } from "../../redux/actions";
import { useEffect } from "react";


//TODO Improve the hotel listing
// create hotel component and import here 
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
            //TODO render hotel component instead of just div and pass data as props to it
            return <div
                key={hotel._id}
            >{hotel.title}</div>
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
                        {/* <CreateHotel /> */}
                    </div>
                    <div className="col">
                        <div>Списък с хотели:</div>
                        {getHotelsList()}
                    </div>
                </div>
            </div>

        </DefaultLayout>
    )
}