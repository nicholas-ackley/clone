// ── @fortawesome/fontawesome-svg-core@6.5.2
// ├── @fortawesome/free-solid-svg-icons@6.5.2
// ├── @fortawesome/react-fontawesome@0.2.2
// ├── @reduxjs/toolkit@2.2.6
// ├── aos@2.3.4
// ├── axios@1.7.2
// ├── framer-motion@11.2.14
// ├── iodash@0.0.1-security
// ├── react-icons@5.2.1
// ├── react-redux@9.1.2
// ├── react-router-dom@6.24.1
// ├── react-scroll@1.9.0
// ├── react-select@5.8.0
// ├── react-simple-typewriter@5.0.1
// ├── react-table@7.8.0
// ├── rechart@0.0.1
// ├── recharts@2.12.7
// ├── sass@1.77.7
// ├── tailwindcss@3.4.4
// └── typescript@5.5.3
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import HomePage from './components/HomePage.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HomePage/>
    {/* ABOUT PAGE IS IMPORTED THROUGH THE NAVBAR */}
    
    </>
  )
}

export default App
