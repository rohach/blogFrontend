import React, { useEffect, useState } from 'react';
import './home.css';
import Latest from '../Latest/Latest';
import About from '../About/About';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts' + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
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
      {/* <Latest posts={posts} /> */}
      <About posts={posts} />
    </>
  );
};

export default Home;
