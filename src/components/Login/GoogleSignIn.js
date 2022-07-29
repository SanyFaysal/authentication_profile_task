import React, { useEffect, useState } from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const GoogleSignIn = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [user, loading] = useAuthState(auth);
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  useEffect(() => {
    if (user) {
      const person = {
        displayName: user.displayName,
        email: user.email,
      };
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
            document.getElementById("form").reset();
          } else {
            alert("Something went wrong. Please try once again");
          }
        });
    }
  }, [user]);
  if (loading) {
    return <>loading...</>;
  }
  return (
    <div className="">
      <button
        onClick={handleGoogleSignIn}
        className="btn  w-full mt-4 normal-case "
      >
        Sign In With Google
      </button>
    </div>
  );
};
export default GoogleSignIn;
