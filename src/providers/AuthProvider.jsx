import axios from 'axios';
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);

  // Providers---------------------->>>>>>
  const googleProvider = new GoogleAuthProvider();
  const facebookProfiler = new FacebookAuthProvider();

  // Create a new user-------------->>>>>>
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update an user profile---------->>>>>
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Email/Password sign in---------->>>>>>
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google sign in----------------->>>>>>
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Observe user state------------->>>>>>
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser && currentUser?.email) {
        axios
          .post(`http://localhost:2000/jwt`, {
            email: createUser?.email,
          })
          .then((data) => {
            localStorage.setItem('access-token', data.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log('Unauthorized authentication', error);
            setLoading(false);
          });
      } else {
        localStorage.removeItem('access-token');
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // Logout the user----------------->>>>>>
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Authentication information----->>>>>>>
  const authInfo = {
    user,
    signIn,
    loading,
    createUser,
    googleSignIn,
    updateUserProfile,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
