import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/home/App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import AboutPage from './pages/About/AboutPage.jsx';
import Projects from './pages/Projects/ProjectsPage.jsx'
import AboutPage from './pages/About/AboutPage.jsx';
// import Music from './pages/music/Music.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    children:[
      {path:'/', element: <App/> },
      {path:'/AboutPage' , element: <AboutPage/> },
      {path:'/Projects' , element: <Projects/> },
      
      // {path:'/Music', element: <Music/> }


    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App/> */}
  </React.StrictMode>
);
