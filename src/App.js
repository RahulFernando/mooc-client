import React from "react";
import Home from "./pages/Home/Home";
import Profile from "./pages/profile/Profile";
import { Redirect, Route, Routes } from "react-router-dom";
import Registration from "./pages/registration/Registration";
import Login from "./pages/login/Login";
import Course from "./pages/Courses/Course";
// import Test from "./pages/test/test";
// import Face from "./pages/face/Face";
//history
import { history } from "./helpers/history";

import AuthGuard from "./guards/AuthGuard";
import GuestGuard from "./guards/GuestGuard";

function App() {
  return (
    <div className="App">
      <Routes history={history}>
        <Route path="/" element={<Home />} />
        <Route
          path="/Profile"
          element={
            <AuthGuard>
              <Profile />
            </AuthGuard>
          }
        />
        <Route path="/registration" element={<Registration />} />
        <Route path="/courses/:id" element={<Course />} />
        <Route
          path="login"
          element={
            <GuestGuard>
              <Login />
            </GuestGuard>
          }
        />
        {/* <Route path="test" element={<Test />} />
              <Route path="/face" element={<Face/>}/>            */}
      </Routes>
    </div>
  );
}

export default App;
