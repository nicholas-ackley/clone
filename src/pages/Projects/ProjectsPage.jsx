import React from 'react'
import Navbar1 from '../home/navbar/Navbar1'
import Card1 from './cards/Card.jsx'

import Title from './cards/Title.jsx'
import img from '../../images/python1.png'
import img1 from '../../images/traver1.png'
import img3 from '../../images/website.png'
import img4 from '../../images/arduino1.png'
import img5 from '../../images/react.png'
import img6 from '../../images/webull.png'





import './cards/Card.css'

import Aos from 'aos'
import 'aos/dist/aos.css'
const ProjectsPage = () => {

  const cards = [
    { id: 1, imageSrc: img, description: 'Python Chat Bot' },
    { id: 2, imageSrc: img1, description: 'My work as a Front-End Developer intern' },
    { id: 3, imageSrc: img3, description: 'Old and new Personal Website' },
    { id: 4, imageSrc: img4, description: 'Custom LED RGB Lights' },
    { id: 5, imageSrc: img5, description: 'Copy cat Websites ' },
    { id: 6, imageSrc: img6, description: 'Application to Analyze the market' },


  ];
  return (
    <>
      <Navbar1/>
      <Title/>
      <div className="cardContainer">
      {cards.map(card => (
        <Card1 key={card.id} id={card.id} imageSrc={card.imageSrc} description={card.description} />
      ))}
      

      </div>
      </>
  )
}

export default ProjectsPage
