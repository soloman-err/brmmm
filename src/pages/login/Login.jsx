import React, { useContext } from 'react';
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
        navigate(from, { replace: true });
      })
      .then((error) => {
        console.log('Sign in error:', error);
      });
  };

  return (
    <section id='form-container'>
      <form id="form" onSubmit={handleLogin}>
        <h3>Please Login</h3>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            required
            placeholder="Enter your password"
          />
        </div>

        <div id="login-btn" className="form-control">
          <button type="submit">Login</button>
        </div>
      </form>
      
      <div id="social-login">
        <button id="google-login" onClick={handleGoogleLogin}>
          <img src="/google.png" alt="" />
          <span>Google</span>
        </button>

        <button id="facebook-login" onClick={handleFacebookLogin}>
          <img src="/facebook.png" alt="" />
          <span>Facebook</span>
        </button>
      </div>
    </section>
  );
};

export default Login;
