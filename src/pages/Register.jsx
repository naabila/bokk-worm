import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../utils/AuthProvider';
import { toast } from 'react-toastify';
import {Fade} from "react-awesome-reveal"
import Swal from 'sweetalert2';
import { GoogleAuthProvider, updateProfile } from 'firebase/auth';
function Register() {
  const { registerUser,loginWithGoogle} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  //register
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.userName.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const newUser={name,email,photo};
    console.log(newUser)
    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error("Enter a valid password: at least 6 characters, 1 uppercase, and 1 lowercase letter.");
      return;
    }

    // Email signup
    registerUser(email, password)
      .then((result) => {
        toast.success("User registered successfully");
        e.target.reset();
        
        console.log(result.user)
        navigate("/");
        //update user
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
        .then(() => {
          console.log("Profile updated");
        })
        .catch((err) => {
          toast.error("Error updating profile: " + err.message);
        });
      })
      .catch((err) => {
        toast.error("Error during registration: " + err.message);
        e.target.reset();
      });
  };

//google login
const handleGoogleLogin = () => {
  loginWithGoogle(googleProvider)
    .then((result) => {
    console.log(result.user)
      toast.success("Logged in successfully with Google");
      navigate("/");
    })
    .catch((err) => {
      toast.error("Error during Google login: " + err.message);
    });
};
  return (
    <Fade>
      <div className="container mx-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-[700px] p-6 bg-white rounded-lg shadow-md">
          <h2 className={`text-3xl   font-bold text-center`}>Register your account</h2>

          {/* Signup Form */}
          <form onSubmit={handleRegister} className="mt-4">
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-deepBlue font-semibold">Your Name</span>
              </label>
              <input
                type="text"
                name="userName"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-semibold text-deepBlue">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo URL"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-semibold text-deepBlue">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-semibold text-deepBlue">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
            </div>

            <button
              className='text-white py-3  bg-black bg-komla w-full mt-4'
              type="submit"
            >
              Register
            </button>
          </form>

          <button
  type="button"
  onClick={handleGoogleLogin}
  className='border border-black py-3 w-full mt-4'
>
  Sign in with Google
</button>


          <p className={`mt-4 text-center text-sm`}>
            Already Have An Account?{" "}
            <Link to="/login" className={`font-semibold text-red-500`}>
              Please Login
            </Link>
          </p>
        </div>
      </div>
    </div>
    </Fade>
  )
}

export default Register