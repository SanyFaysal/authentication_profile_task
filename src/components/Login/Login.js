import { updatePassword } from "firebase/auth";
import React, { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import GoogleSignIn from "./GoogleSignIn";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, uError] =
    useSendPasswordResetEmail(auth);
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
    navigate("/");
  };

  const handleUpdatePassword = () => {
    if (email === "") {
      return alert("Please Give your valid email");
    } else {
      sendPasswordResetEmail(email);
      alert("Sent email");
    }
  };
  if (sending || loading) {
    return <p>sending...</p>;
  }
  return (
    <div className="hero min-h-screen ">
      <div className="card flex-shrink-0 lg:w-[35%]  border bg-base-100">
        <h2 className="text-center mt-6 lg:text-3xl font-bold text-success">
          Login Form
        </h2>
        <div className="card-body mt-[-20px]">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                tpe="text"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <button
                  onClick={handleUpdatePassword}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </button>
              </label>
            </div>
            <div className="form-control mt-3">
              <button type="submit" className="btn btn-success">
                Login
              </button>
            </div>
          </form>
          <div className="text-center">
            <span className="text-md">Not a Member ? </span>
            <Link to="/register" className="text-green-500">
              Create an account
            </Link>
          </div>
          {error && <h2 className="text-center text-red-500">{error}</h2>}
          <GoogleSignIn></GoogleSignIn>
        </div>
      </div>
    </div>
  );
};

export default Login;
