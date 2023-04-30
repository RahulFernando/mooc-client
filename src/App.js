import React from "react";
import Home from "./pages/Home/Home";
import Profile from "./pages/profile/Profile";
import { Redirect, Route, Routes } from "react-router-dom";
import Registration from "./pages/registration/Registration";
import Login from "./pages/login/Login";
// import Test from "./pages/test/test";
// import Face from "./pages/face/Face";
//history
import { history } from "./helpers/history";

function App() {
  return (
    <div className="App">
      <Routes history={history}>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="test" element={<Test />} />
              <Route path="/face" element={<Face/>}/>            */}
      </Routes>
    </div>
  );
}

export default App;
