import React, { useEffect } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Headroom from 'react-headroom';
import LocomotiveScroll from 'locomotive-scroll';
import './App.css';
import Navbar from './Components/Common/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Latest from './Components/Pages/Latest/Latest';

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll(
      {
        el: document.querySelector('#main'),
        smooth: true,
      },
      []
    );
  });
  return (
    <div id="main">
      <ChakraProvider theme={theme}>
        <Headroom>
          <Navbar />
        </Headroom>
        <Home />
        <Latest />
        <About />
      </ChakraProvider>
    </div>
  );
}

export default App;
