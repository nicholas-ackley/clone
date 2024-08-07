import React, { useEffect, useState } from 'react'
// import { ScrollReveal } from 'reveal-on-scroll-react';
import './Music.css'
import logo from './images/yamaha.png'
import Navbar from './Navbar.jsx'
import Bio from './Bio.jsx'


function Music(){


    const [ show, setShow ] = useState(false);
    const [folded, setFolded ] = useState(false)
    // const [ animate ,setAnimations ] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        },1200);
    }, [])

    useEffect(() =>{
        setTimeout(() => {
            setFolded(true)
        }, 500)
    })

    return(
        <>

            <div className="header">
                <h1 className={`title ${show ? 'grow' : ''}`}><b>N I C H O L A S</b> </h1>
                <h1 className={`ackley ${show ? 'grow' : ''}`}><b>A C K L E Y</b> </h1>
                    {/* <div className="cursive">Classical Pianist</div> */}
            </div>
                <div className="white-line"></div>
                    <div className="piano"> 
                    
                        <img className='yamaha'src={logo} alt='Piano image' style={{width: '1850px', height:'auto ', opacity:'.56'}}></img>
                            <div className="grey">
                                <div className='genre'><h1>Classical. Jazz. Pop </h1></div>
                            

                            </div>
                            <Navbar/>
                            <Bio/>
                            
   
            </div>
                

 
        
        </>
    )
}
export default Music;