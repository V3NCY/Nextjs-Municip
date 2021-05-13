import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"

export default function HotelsLayout({ children }) {

    return <>
        <Navbar />
        <div className="container mt-5">
            {children}
        </div>
        <Footer />
    </>
}