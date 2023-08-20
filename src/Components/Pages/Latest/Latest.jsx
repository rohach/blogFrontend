import React, { useState } from 'react';
import './latest.css';
import img from '../../Assets/bg.jpg';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Latest = ({ posts }) => {
  const [latest, setLatest] = useState([]);
  return (
    <section>
      <div className="smallLine"></div>
      <div className="recent">Latest Posts</div>
      <div className="latest">
        {posts.slice(0, 4).map(post => {
          return (
            <>
              <div className="latest_inner" key={post._id}>
                {post.photo && (
                  <img src={post.photo} alt="" className="latest_img" />
                )}
                {/* <div className="latest_heading">{post.userName}</div>
                <div className="latest_heading">{post.keywords}:k</div>
                <div className="latest_heading">
                  {new Date(post.createdAt).toDateString()}
                </div>
                <div className="latest_category">
                  as
                  {post.categories.map(c => {
                    return <span className="category">{c.name}</span>;
                  })}
                </div>
                <div className="latest_desc">{post.desc}</div> */}
                <Link to={`/post/${post._id}`} className="latest_heading">
                  <button className="share">{post.title}</button>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Latest;
