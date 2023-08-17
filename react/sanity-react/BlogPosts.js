// BlogPosts.js
import React, { useState, useEffect } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import client from './sanity';


function BlogPosts() {
  const [posts, setPosts] = useState([]);

  function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
          title,
          body,
          "authorName": author->name,
          publishedAt
        }`
      )
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <h1 className="hero">My React Blog</h1>
    <div className="blog-container">
      {posts.map((post) => (
        <div className="card" key={post.title}>
          <div className="main-content">
            <div className="header">
              <span>Article on</span>
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <p className="heading">{post.title}</p>
            <div className="categories">
              <span>React</span>
              <span>Css</span>
            </div>
            <BlockContent blocks={post.body} />
          </div>
          <div className="footer">By {post.authorName}</div>
        </div>
      ))}
      {/* Video background */}
      <video autoPlay loop muted className="video-background">
        <source src="https://res.cloudinary.com/deafnuhyi/video/upload/v1692230508/Screen_Recording_2023-08-17_at_2.59.47_AM_tge0xc.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </>
  );
}

export default BlogPosts;
