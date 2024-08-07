import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import '../pages/home/components/HomePage.css'

const TypingAnimation = () => {
    const [text] = useTypewriter({
        words: [' Front-End Developer', ' Software Engineer'],
        loop: {},
        typeSpeed: 75,
        deleteSpeed: 60,
        
    }
    );
  return (
    <div>
      <div className="type-writer">
        <h1 style={{margin: '50px'}}>
              <span style={{ fontWeight: 'bold',color: 'white'}}>
                {text}</span>
              <span style={{color: 'orange'}}>
                  <Cursor cursorStyle='|'/>
              </span>
        </h1>
        </div>
    </div>
  )
}

export default TypingAnimation
