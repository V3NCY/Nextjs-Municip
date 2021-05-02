import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"
import Carousel from "../carousel/carousel"
import GoogleMaps from "../../pages/maps/index"
import Services from "../services/Services"

function HomeLayout(props) {
  return <>
    <Navbar />
    {props.children}
    <Carousel />
    <Services />
    <GoogleMaps />
    <Footer />
  </>
}

export default HomeLayout