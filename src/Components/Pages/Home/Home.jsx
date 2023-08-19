import React from 'react';
import './home.css';

const Home = () => {
  return (
    <section style={{ marginTop: '0px' }}>
      <div className="home">
        <div className="small_heading">
          A personal <span className="blog">blog</span>
        </div>
        <div className="block_text">
          <div className="heading_main">
            <span>R</span>
            <span>o</span>
            <span>h</span>
            <span>a</span>
            <span>n</span>
            <span>.</span>
          </div>
          <div className="header_last">
            I am a Web Developer <br /> from Nepal
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
