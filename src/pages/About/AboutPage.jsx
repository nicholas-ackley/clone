// import '../home/components/HomePage.css'
import './AboutPage.css'
import VS from '../../images/vscode.png'
import UTD from '../../images/newutd.png'
import AIS from '../../images/ais.png'


// import ScrollAnimation from '../home/components/ScrollAnimation';
import Animations from'./AboutAnimations.jsx'
import Footer from './footer/Footer.jsx';
import { forwardRef } from 'react';
import { Form } from 'react-router-dom'
import Profile from './ProfilePicture.jsx'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function Headline({ text}, ref) {


    return(
        <>
        <div className="about-page">
            <div className="about-me-title" data-aos='zoom-in' data-aos-delay="300">About Me</div>
            <div className="vscode-window-container" data-aos='zoom-in' data-aos-delay="300">

            <Animations/>
            <Footer/>
                </div>
                <div className="profile-container"data-aos="fade-right"data-aos-delay="300" >
                    <img src={AIS}></img>
                </div>
                <div className="utd-logo " data-aos="fade-left" data-aos-delay="300">
                    <img className='utd'  src={UTD}></img>
                    <Animations/>
                </div>
        </div>

        </>
    )
}

export default forwardRef(Headline)
