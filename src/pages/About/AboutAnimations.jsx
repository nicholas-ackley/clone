// src/components/VSCodeBio.js
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, {useEffect, useState } from 'react'


import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './AboutAnimations.css';

const VS = () => {
  const biography = `
  // <h1> About Me </h1>
  Hello, I am a software developer with a passion for creating dynamic web applications. 
  I have experience with various programming languages and frameworks. 
  I enjoy solving complex problems and continuously learning new technologies.`;

  const aboutme = `
  // <h2> About Me </h2>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 
an unknown printer took a galley of type and scrambled it to make a type specimen book. 
t has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;


  useEffect(() => {
    Aos.init();

}, [])


  const [text] = useTypewriter({
    words: [biography],
    typeSpeed: 80, 
    deleteSpeed: 90,


  });
  const [about] = useTypewriter({
    words: [aboutme],
    typeSpeed: 80, 
    deleteSpeed: 90,
  });

  return (
    <>
        <div className="vscode-container" data-aos='fade-right'>
          <div className="title-bar">
            <div className="title-bar-text">VS Code - Biography.jsx</div>
          </div>
          <div className="code-window">
            <p className="typing-animation">
              {text}
              <Cursor />
            </p>
          </div>
        </div>
        <div className="vscode-hobby-container" data-aos='fade-right'>
          <div className="hobby-title-bar">
            <div className="hobby-title-bar-text">Inteliji - AboutMe.tsx</div>
          </div>
          <div className="hobby-code-window">
            <p className="hobby-typing-animation">
              {about}
              <Cursor />
            </p>
          </div>
        </div>
        
    </>
    
  );
};

export default VS;
