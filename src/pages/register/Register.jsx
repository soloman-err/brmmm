import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Register = () => {
  const [axiosSecure] = useAxiosSecure();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await createUser(data?.email, data?.password);
      const loggedUser = result.user;
      console.log(loggedUser);

      await updateUserProfile(data?.name, data?.photoURL);

      const savedUser = {
        name: data?.name,
        photoURL: data?.photoURL,
        email: data?.email,
      };

      const response = await axiosSecure.post('/users', savedUser);
      const responseData = response.data;
      console.log(responseData);

      if (responseData.insertedIdd) {
        reset();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Welcome to brmmm!',
          showConfirmButton: false,
          timer: 1000,
        });
        navigate('/');
      }
    } catch (error) {
      console.log('An error occurred:', error);
    }
  };

  return (
    <section>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <h4>Please Register</h4>
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            {...register('name', { required: true })}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-control">
          <label>Photo url</label>
          <input
            type="url"
            name="photoURL"
            id="photoURL"
            {...register('photoURL', { required: true })}
            placeholder="https://imagef.jpg"
          />
        </div>

        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            {...register('email', { required: true })}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            {...register('password', { required: true })}
            placeholder="Password"
          />
        </div>

        <div className="form-control">
          <label>Confirm Password</label>
          <input
            type="password"
            name="cPassword"
            id="cPassword"
            {...register('cPassword', { required: true })}
            placeholder="Password"
          />
        </div>

        <div className="form-control">
          <button type="submit">Register</button>
        </div>

        {/* <div id="social-login">
          <button onClick={handleFacebookLogin}>
            <FaFacebook />
          </button>
          <button onClick={handleGoogleLogin}>
            <FaGoogle />
          </button>
        </div> */}
      </form>
    </section>
  );
};

export default Register;
