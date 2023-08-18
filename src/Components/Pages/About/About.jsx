import React from 'react';
import './about.css';
import img from '../../Assets/bg.jpg';
import pp from '../../Assets/profile.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section>
      <div className="about">
        <div className="about_left">
          <div className="date">Nov. 15th 2016</div>
          <div className="heading">Modeling & Stylist in USA</div>
          <div className="category">LIFESTYLE</div>
          <img src={img} alt="post image" className="post_img" />
        </div>
        <div className="about_right">
          <div className="col-md-12 col-md-offset-0 text-center line">
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
          {/* Social icons */}
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
          {/* Latest Post */}
          <div className="col-md-12 col-md-offset-0 text-center line latest">
            <h2>
              <span>Latest Post</span>
            </h2>
          </div>
          <div className="latest_posts">
            <div className="latest_post">
              <img src={img} alt="latest_post" className="latest_post_img" />
              <div className="latest_post_desc">
                <div className="latest_post_desc_date">Dec. 25, 2019</div>
                <div className="latest_post_desc_title">
                  Most Beautiful Site in 2019
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
