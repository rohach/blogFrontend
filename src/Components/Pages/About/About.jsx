import React, { useEffect, useState } from 'react';
import './about.css';
import img from '../../Assets/bg.jpg';
import pp from '../../Assets/profile.jpg';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Posts from '../Posts/Posts';

const About = ({ posts }) => {
  const [cats, setCats] = useState([]);
  console.log(posts);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('/categories');
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <section style={{ marginTop: '15vh' }}>
      <div className="smallLine"></div>
      <div className="recent" style={{ marginBottom: '10vh' }}>
        Latest Posts
      </div>
      <div className="about">
        <div className="about_left">
          <div className="date">Nov. 15th 2016</div>
          <div className="heading">Modeling & Stylist in USA</div>
          <div className="category_heading">LIFESTYLE</div>
          <img src={img} alt="post image" className="post_img" />
          <p className="main_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error alias
            accusamus, officia mollitia modi minus consequuntur asperiores
            sequi, consectetur qui obcaecati est cumque fugit recusandae,
            eligendi praesentium adipisci dolorum nostrum. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Error alias accusamus, officia
            mollitia modi minus consequuntur asperiores sequi, consectetur qui
            obcaecati est cumque fugit recusandae, eligendi praesentium adipisci
            dolorum nostrum.
          </p>
          <button className="share">
            Read more <i className="ri-arrow-right-fill"></i>
          </button>
          <Posts />
        </div>
        <div className="about_right">
          <div
            className="col-md-12 col-md-offset-0 mt-5 text-center line
          "
          >
            <h2>
              <span>About Me</span>
            </h2>
          </div>
          <div className="profile_desc">
            <img src={pp} alt="profile" className="my_image" />
            <h3>Rohan Chaulagain</h3>
            <h4>CEO, Founder</h4>
            <p className="profile_desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              aspernatur nam quam modi. Beatae illo quia corrupti blanditiis
              asperiores magnam cumque temporibus ratione cupiditate officia
              aut, commodi incidunt deleniti eaque.
            </p>
          </div>
          <div className="social_icons">
            <a href="https://www.facebook.com/rohan.chaulagain.5">
              {' '}
              <i className="ri-facebook-box-fill"></i>
            </a>
            <a href="https://www.instagram.com/rohanchaulagain/">
              <i className="ri-instagram-fill"></i>
            </a>
            <a href="https://github.com/rohach">
              <i className="ri-github-fill"></i>
            </a>
          </div>
          {/* Category */}
          <div
            className="col-md-12 col-md-offset-0 text-center line"
            style={{ marginTop: '3em' }}
          >
            <h2>
              <span>Categories</span>
            </h2>
            <div className="categories">
              <ul className="category">
                {cats.map(cat => {
                  return (
                    <Link to={`/?cat=${cat.name}`}>
                      <li>
                        <i className="ri-checkbox-circle-line"></i> {cat.name}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Latest Post */}
          <div
            className="col-md-12 col-md-offset-0 mt-5 text-center line
          "
          >
            <h2>
              <span>Latest Posts</span>
            </h2>
          </div>

          {posts.slice(0, 3).map(post => {
            return (
              <div className="latest_posts">
                <div className="latest_post">
                  <img
                    src={post.photo}
                    alt="latest_post"
                    className="latest_post_img"
                  />

                  <div className="latest_post_desc">
                    <div className="latest_post_desc_title">{post.title}</div>
                    <div className="latest_post_desc_date">
                      {' '}
                      {new Date(post.createdAt).toDateString()}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="share load_more">
            Load More <i className="ri-arrow-right-line"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
