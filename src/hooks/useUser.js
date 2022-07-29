import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useUser = () => {
  const [user, loading] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState();
  // useEffect(() => {
  //   fetch(`http://localhost:5000/user/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setUserInfo(data));
  // }, [user]);

  if (loading) {
    return <p className="text-center mt-4">Loading...</p>;
  }
  console.log(user);
  // return [userInfo];
};
export default useUser;
