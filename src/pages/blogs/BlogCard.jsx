import './BlogCard.scss';

const BlogCard = ({blog}) => {
  console.log(blog);
  
  return (
    <div id="card">
      <div id='card-header'>
        <h2>{blog?.title}</h2>
        <div id='publish-info'>
            <span>Author: Martian</span>
            <span>published at: Jan23, 2033</span>
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
