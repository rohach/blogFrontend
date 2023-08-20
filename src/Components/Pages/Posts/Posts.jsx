import React, { useEffect, useState } from 'react';
import './posts.css';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts' + search);
      setPosts(res.data);
      console.log(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <div class=" posts row">
        {posts.slice(0, 3).map(post => {
          return (
            <div className="col-12 col-sm-8 col-md-6 col-lg-4 single_post">
              <div className="bg-light card pro-card">
                <img src={post.photo} className="card-img" alt="Image" />
                <div className="card-body">
                  <h4 className="card-title">{post.title}</h4>
                  <p className="card-text pro-desc">{post.desc}</p>
                </div>
                <div className="share text-center mb-2">Read more</div>
              </div>
            </div>
          );
        })}
        <div className="share text-center">
          Load More <i className="ri-arrow-right-fill"></i>
        </div>
      </div>
    </>
  );
};

export default Posts;
