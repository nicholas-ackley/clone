import React from "react";
import '../components/HomePage.css'
import { useRef } from "react";
import About from "../../About/AboutPage.jsx";
import Headline from "../../About/Headline.jsx";
import Name from '../../home/components/NameAnimation.jsx'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Navbar = () => {
    const ref = useRef(null)

    // const handleClick = () => {
    //     if (location.pathname == "/") {
    //       navigate("/", { state: { scrollToAbout: true } });
    //     } 
    //     else {
    //       ref.current?.scrollIntoView({ behavior: 'smooth' });
    //     }
    //   };
    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'})
    }

    return(
        <>

            <nav className="navbar">
                <ul className="navbar-links">
                    <div data-aos="fade-down" data-aos-delay="600" className="name-container "data-aos-duration="1500" ><Name/> </div>
                    <li><a data-aos="fade-down" data-aos-delay="700" data-aos-duration="1500"href="/">Home</a></li>
                    <li><a data-aos="fade-down" data-aos-delay="800" data-aos-duration="1500"onClick={handleClick}>About</a></li>
                    <li><a data-aos="fade-down"data-aos-delay="900" data-aos-duration="1500"href="/Projects">Projects</a></li>
                    <li><a data-aos="fade-down"data-aos-delay="1000" data-aos-duration="1500"href="https://github.com/nicholas-ackley">Github</a></li>

                </ul>
            </nav>
            
            <Headline ref={ref}/>
        </>
    )
}
export default Navbar