import React from 'react';
import './BlogCard.scss';

const BlogCard = () => {
  return (
    <div id="card">
      <div id='card-header'>
        <h2>ukes parrdle casa de</h2>
        <div id='publish-info'>
            <span>Author: Martian</span>
            <span>published at: Jan23, 2033</span>
        </div>
      </div>
      <div id='card-body'>
        <img src="https://dummyimage.com/600x500/000/111" alt="blog-img" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
          deserunt illum dolorem perferendis reprehenderit non tenetur itaque
          qui sequi corporis consectetur magni odio velit inventore omnis harum
          eum laborum, nobis at totam sit. Qui, fuga? Ex dolores distinctio
          praesentium voluptate recusandae. Tenetur saepe nulla dolor, harum
          ducimus et consectetur accusamus, quam facere unde culpa fuga dolorem
          error atque amet autem.{' '}
          <span id="see-more">See More... </span>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
