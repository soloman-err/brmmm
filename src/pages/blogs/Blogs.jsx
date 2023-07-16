import useBlogs from '../../hooks/useBlog';
import BlogCard from './BlogCard';
import './Blogs.scss';

const Blogs = () => {
  const [blogs]= useBlogs();
  console.log(blogs);

  return (
    <main>
      <h3>Brmmm Blogs</h3>
      <div id="card-container">
        {
          blogs.map((blog)=> <BlogCard key={blog._id} blog={blog}></BlogCard>)
        }
      </div>
    </main>
  );
};

export default Blogs;
