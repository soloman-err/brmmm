import React, { useContext } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import './Login.scss';

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleFacebookLogin = () => {
    console.log('facebook login');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      signIn(email, password)
        .then((result) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Welcome to Oldschool',
            text: 'logged in successfully!',
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(from, { replace: true });
        })
        .then((error) => {
          console.log('Error:', error);
        });
    } catch (error) {
      console.log('An error occurred:', error);
    }
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .then((error) => {
        console.log('Sign in error:', error);
      });
  };

  return (
    <section>
      <form id="form" onSubmit={handleLogin}>
        <h4>Please Login</h4>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            id=""
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            id=""
            required
            placeholder="Enter your password"
          />
        </div>

        <div className="form-control">
          <button type="submit">Login</button>
        </div>

        <div id="social-login">
          <button onClick={handleGoogleLogin}>
            <FaGoogle />
          </button>
          <button onClick={handleFacebookLogin}>
            <FaFacebook />
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
