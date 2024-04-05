import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import WhatWeDo from './components/About/WhatWeDo';
import WhoWeAre from './components/About/WhoWeAre';
import WhoWeServe from './components/About/WhoWeServe';
import Resources from './components/Resources/Resources';
import Careers from './components/Careers/Careers';
import ContactUs from './components/ContactUs/ContactUs';
import Particle from './components/Particles/Particle';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/Home' element={<Home />} />
      <Route path='/about' element={<About />}>
        <Route path='whatwedo' element={<WhatWeDo />} />
        <Route path='whoweare' element={<WhoWeAre />} />
        <Route path='whoweserve' element={<WhoWeServe />} />
      </Route>
      <Route path='/resources' element={<Resources />} />
      <Route path='/careers' element={<Careers />} />
      <Route path='/contactus' element={<ContactUs />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <Particle />
      <RouterProvider router={router} />
    </>

  );
}

export default App;
