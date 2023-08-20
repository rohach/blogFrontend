import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './post.css';

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('/posts/' + path);
      setPost(res.data);
      console.log(res.data);
    };
    getPost();
  }, []);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={post.photo} alt={post.title} />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to={`/?user=${post.userName}`}>
                {post.userName}
              </Link>
            </b>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toString()}
          </span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
};

export default Post;
