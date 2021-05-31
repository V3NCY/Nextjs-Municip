import HotelCard from "./HotelCard";
import SearchBar from "./SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getHardcodedHotels } from "../../../redux/actions";

function HotelList() {

  const hardcodedHotels = useSelector(state => state.hardcodedHotels);
  const searchValue = useSelector(state => state.searchValue);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHardcodedHotels());
  }, []);

  const getHotelList = () => {
    const hotels = hardcodedHotels.filter(hotel => hotel.name.toLowerCase().indexOf(searchValue) !== -1)

    if (!hotels.length) {
      return null;
    }
    const hotelList = hotels.map(hotel => {
      return <HotelCard
        key={hotel.id}
        hotel={hotel}
      ></HotelCard>
    })
    return hotelList;
  }

  return <>
    <div className="row">
      <SearchBar />
      {getHotelList()}
    </div>
  </>
}
export default HotelList;