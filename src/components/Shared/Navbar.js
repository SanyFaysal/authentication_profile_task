import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  if (loading) {
    return <p>Loading...</p>;
  }
  const li = (
    <>
      <li>
        <Link to="/user/personalProfile">Personal Profile</Link>
      </li>
      <li>
        <Link to="/user/socialProfile">Social Profile</Link>
      </li>
      <li>
        <Link to="/professionalProfile">Professional Profile</Link>
      </li>
    </>
  );
  return (
    <div class="navbar bg-base-100 lg:px-16">
      <div class="navbar-start hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{user ? li : <></>}</ul>
      </div>
      <div class="navbar-end">
        {!user ? (
          <Link to="/login" className="btn btn-sm btn-ghost">
            Login
          </Link>
        ) : (
          <button
            className="btn btn-sm btn-ghost"
            onClick={() => {
              signOut(auth);
              navigate("/");
            }}
          >
            Log Out
          </button>
        )}
        <Link to="/register" className="btn btn-sm btn-ghost">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
