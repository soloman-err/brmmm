import Swal from 'sweetalert2';
import './PostBlog.scss';

const PostBlog = () => {
  const handlePostBlog = (event) => {
    event.preventDefault();
    const form = event.target;
    const photoURL = form.photoURL.value;
    const title = form.title.value;
    const desc = form.desc.value;

    const newProduct = {
      photoURL,
      title,
      desc,
    };

    fetch('https://brmmm-server.vercel.app/postBlog', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire(
            'Published successfully!',
            'New Blog Published!',
            'success'
          );
          form.reset();
        }
      });
  };

  return (
    <div id="post-blog">
      <h2>Post a new blog</h2>

      <form onSubmit={handlePostBlog}>
        {/* Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" name="title" placeholder="title" required />
        </div>

        {/* Picture URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photoURL" placeholder="photoURL" required />
        </div>

        {/* Blog description */}
        <div id="blog-desc" className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            type="text"
            name="desc"
            placeholder="Write from here..."
            required
          ></textarea>
        </div>

        <div id="publish-btn">
          <button>Publish Now</button>
        </div>
      </form>
    </div>
  );
};

export default PostBlog;
