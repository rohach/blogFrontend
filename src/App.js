import React, { useContext, useEffect } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Headroom from 'react-headroom';
import LocomotiveScroll from 'locomotive-scroll';
import './App.css';
import Navbar from './Components/Common/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Post from './Components/Pages/Posts/Post';
import Register from './Components/Common/Register/Register';
import Login from './Components/Common/Login/Login';
import { Context } from './Components/Context/Context';
import LoginHereko from './Components/Common/Login/LoginHereko';

function App() {
  const { user } = useContext(Context);
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
    <BrowserRouter>
      <div id="main">
        <ChakraProvider theme={theme}>
          <Headroom>
            <Navbar />
          </Headroom>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/loginhereko" element={<LoginHereko />} />
          </Routes>
        </ChakraProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
