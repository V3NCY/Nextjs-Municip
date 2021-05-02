import HotelItem from "./HotelItem"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { getHotels } from "../../redux/actions"

function HotelsList(props) {

    const hotels = useSelector(state => state.hotels);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHotels());
    }, []);
    const getHotelsList = () => {
        if (!hotels.length) {
            return null;
        }
        const hotelsList = hotels.map(hotel => {
            return <HotelItem
                key={hotel._id}
                title={hotel.title}
                description={hotel.description}
                extras={hotel.extras}
                rating={hotel.rating}
                image={hotel.image}
            >

            </HotelItem>
        })
        return hotelsList;
    }

    return <>
        <div className="row">
            {getHotelsList()}
        </div>
    </>
}
export default HotelsList