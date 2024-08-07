// ├── react-router-dom@6.24.1
// ├── react-scroll@1.9.0
// └── react-simple-typewriter@5.0.1


import React from "react";
import TypingAnimation from "../../../animations/TypingAnimation.jsx";
import Me from '../../../images/formal.png'
import { useRef } from "react";
import About from "../../About/AboutPage.jsx";
import Navbar from "../navbar/Navbar.jsx";




const Hero = () => {

    const ref = useRef(null)

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'})
    }



    return(
        <>
            
        
            <div className="home-biography-container">
                <div className="greeting-title"><h3>Hello world, I'm</h3></div>
                <div className="name-bio"><h1>Nicholas Ackley</h1></div>    
                {/* <div className="front-end-developer">Front-End Developer</div> */}
                <TypingAnimation/>
                <div className="closing-title"><h4>Welcone to my personal website 👋🏼</h4></div>
            </div>

            <div className="home-circle-container">
                <img className="home-circle-image" src={Me}></img>
            </div>
            <div style={{ textAlign:'center'}}>

                <div className="container">asdad</div>


            </div>
        </>
    )
}
export default Hero