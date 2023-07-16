import './BlogCard.scss';

const BlogCard = ({blog}) => {
  console.log(blog);
  
  return (
    <div id="card">
      <div id='card-header'>
        <h2>{blog?.title}</h2>
        <div id='publish-info'>
            <span>Author: {blog?.author}</span>
            <span>published at: {blog?.publishedAt}</span>
        </div>
      </div>
      <div id='card-body'>
        <img src={blog?.photoURL} alt="blog-img" />
        <p>
          {blog?.desc}
          <span id="see-more">See More... </span>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
