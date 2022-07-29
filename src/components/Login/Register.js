import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
  useAuthState,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import GoogleSignIn from "./GoogleSignIn";

const Register = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [VerifyEmail, setVerifyEmail] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [updateProfile, updating, uError] = useUpdateProfile(auth);
  const [createUserWithEmailAndPassword, eUser, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const onSubmit = async (data) => {
    const { email, password, name } = data;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({
      displayName: name,
    });
    navigate("/verifyEmail");
    reset();
  };
  if (loading || updating) {
    return <p>loading ....</p>;
  }
  if ((uError, error)) {
    return <p>{error || uError}</p>;
  }
  return (
    <div className="hero   ">
      <div className="card flex-shrink-0 w-full mx-auto  ">
        <div className="card-body lg:w-[35%]  mt-6 mx-auto border ">
          <h2 className="text-center  lg:text-3xl text-2xl font-bold text-success">
            Register Form
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mx-auto ">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                placeholder="Your full name"
                className="input w-full input-bordered "
              />
              {errors.name?.type === "required" && (
                <span className="text-error">Name is required</span>
              )}
            </div>
            <div className="mx-auto  ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                placeholder="Email address"
                className="input w-full input-bordered "
              />
              {errors.email?.type === "required" && (
                <span className="text-error">Email is required</span>
              )}
            </div>
            <div className="  mx-auto">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", { required: true })}
                placeholder="password"
                className="input w-full input-bordered "
              />
              {errors.password && (
                <span className="text-error">Password is required</span>
              )}
            </div>
            {error && (
              <p className="text-red-500 text-center">{error?.message}</p>
            )}
            <div className="w-full">
              <input
                type="submit"
                value="Register"
                className="btn btn-success w-full mt-4 "
              />
            </div>
          </form>

          <p className=" pt-3 text-center">
            Already have an account ?
            <Link to="/login" className="text-green-500">
              Go to login
            </Link>
          </p>
          <GoogleSignIn></GoogleSignIn>
        </div>
        <div />
      </div>
    </div>
  );
};

export default Register;
