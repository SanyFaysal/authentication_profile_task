import { Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import VerifyEmail from "./components/Login/VerifyEmail";
import PersonalProfile from "./components/Profile/PersonalProfile";
import ProfessionalProfile from "./components/Profile/ProfessionalProfile";
import SocialProfile from "./components/Profile/SocialProfile";
import Navbar from "./components/Shared/Navbar";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={<h2 className="text-3xl text-center mt-5">Welcome</h2>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/verifyEmail"
          element={<VerifyEmail></VerifyEmail>}
        ></Route>
        <Route
          path="/user/personalProfile"
          element={<PersonalProfile></PersonalProfile>}
        ></Route>
        <Route
          path="/user/socialProfile"
          element={<SocialProfile></SocialProfile>}
        ></Route>
        <Route
          path="/professionalProfile"
          element={<ProfessionalProfile></ProfessionalProfile>}
        ></Route>
      </Routes>
    </div>
  );
}
export default App;
