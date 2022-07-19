import Navbar from "./Navbar";
import Footer from "./Footer"

const layout = ({ children }) => {
    return ( 
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
     );
}
 
export default layout;