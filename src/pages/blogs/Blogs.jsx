import React from 'react';
import BlogCard from './BlogCard';
import './Blogs.scss';

const Blogs = () => {
  return (
    <main>
      <h3>Brmmm Blogs</h3>
      <div id="card-container">
        <BlogCard />
        <hr />
        <BlogCard />
        <hr />
        <BlogCard />
        <hr />
        <BlogCard />
        <hr />
        <BlogCard />
      </div>
    </main>
  );
};

export default Blogs;
