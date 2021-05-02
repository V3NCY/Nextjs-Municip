import Head from 'next/head'
import DefaultLayout from '../../components/layouts/default'
import HotelsList from "../../components/hotels/HotelList"
import { useQuery, gql } from '@apollo/client'
import CreateHotel from "../../components/hotels/create-hotel"

const GET_HOTELS = gql`
  query getHotels {
    hotels {
      _id
      title
    }
  }
`;

function AddHotel(props) {

    const { data } = useQuery(GET_HOTELS);
    const getHotels = () => {
        if (!data) {
            return null;
        }
        const hotelsList = data.hotels.map(hotel => {
            return <div
                key={hotel._id}
            >{hotel.title}</div>
        })
        return hotelsList;
    }

    return <>
        <DefaultLayout>
            <Head>
                <title>Добави хотел</title>
            </Head>
            <h1>Добави хотел</h1>
            <HotelsList />
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <CreateHotel />
                    </div>
                    <div className="col">
                        <div>Списък с хотели:</div>
                        {getHotels()}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    </>
}
export default AddHotel