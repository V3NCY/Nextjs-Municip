import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"
import Carousel from "../carousel/carousel"

function HomeLayout(props) {
  return <>
    <Navbar />
    {props.children}
    <Carousel />
    <Footer />
  </>
}

export default HomeLayout