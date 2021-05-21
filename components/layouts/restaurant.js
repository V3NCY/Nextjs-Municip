import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"

export default function RestaurantLayout({ children }) {

    return <>
        <Navbar />
        <div className="container mt-5">
            {children}
        </div>
        <Footer />
    </>
}