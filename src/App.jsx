import Home from './components/Home/Home'
import WhatWeDo from './components/About/WhatWeDo'
import WhoWeAre from './components/About/WhoWeAre'
import WhoWeServe from './components/About/WhoWeServe'
import Resources from './components/Resources/Resources'
import Careers from './components/Careers/Careers'
import ContactUs from './components/ContactUs/ContactUs'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import About from './components/About/About'
import Particle from './components/Particles/Particle'
import Navbar from './components/Navbar/Navbar'
import { motion } from 'framer-motion';
import Footer from './components/Footer/Footer'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/Home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='about/whatwedo' element={<WhatWeDo />} />
      <Route path='about/whoweare' element={<WhoWeAre />} />
      <Route path='about/whoweserve' element={<WhoWeServe />} />
      <Route path='resources' element={<Resources />} />
      <Route path='careers' element={<Careers />} />
      <Route path='contactus' element={<ContactUs />} />
    </Route >
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
