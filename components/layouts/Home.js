import Navbar from "../navbar/Navbar"
import Footer from "../footer/footer"
import Carousel from "../carousel/carousel"

function HomeLayout (props) {
    return <>
    <Navbar/>
    <Carousel/>
    {props.children}
    <Footer/>
  </>
}

export default HomeLayout