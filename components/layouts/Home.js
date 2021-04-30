import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"
import Carousel from "../carousel/carousel"
import GoogleMaps from "../../pages/maps/index"

function HomeLayout(props) {
  return <>
    <Navbar />
    {props.children}
    <Carousel />
    <GoogleMaps />
    <Footer />
  </>
}

export default HomeLayout