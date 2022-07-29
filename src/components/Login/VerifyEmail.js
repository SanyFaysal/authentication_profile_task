import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import auth from "../../firebase.init";
import { Link, useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  const handleVerify = () => {
    sendEmailVerification();
    alert("Sent email");
  };
  useEffect(() => {
    if (user) {
      console.log(user);
      const person = {
        displayName: user.displayName,
        email: user.email,
      };
      if (user?.emailVerified) {
        fetch(`http://localhost:5000/user`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(person),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.insertedId) {
              alert("SuccessFully Added ");
              navigate("/");
            } else {
              alert("Something went wrong. Please try once again");
            }
          });
      }
    }
  }, [user]);
  if (loading) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  if (sending) {
    return <p>Sending....</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="w-full  mt-28 border w-96 p-20 mx-auto">
      <h2 className="my-3 text-2xl text-center">Please verify your email</h2>
      <div className="flex justify-center ">
        <Link to="/register">
          <button className="btn btn-sm mr-3 btn-warning normal-case">
            Back
          </button>
        </Link>
        <button
          className="btn btn-success  normal-case btn-sm"
          onClick={handleVerify}
        >
          Verify Email
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
