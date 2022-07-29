import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useUser from "../../hooks/useUser";

const ProfessionalProfile = () => {
  const [user, loading] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);
  if (loading) {
    return <p className="text-center mt-5">Loading...</p>;
  }
  return (
    <>
      <div className="card w-96 bg-base-100 border mx-auto mt-10">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{userInfo?.displayName}</h2>
          <p className="badge badge-sm">{userInfo?.email}</p>
        </div>
      </div>
    </>
  );
};

export default ProfessionalProfile;
