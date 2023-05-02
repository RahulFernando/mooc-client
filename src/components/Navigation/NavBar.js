import "./navBar.css";
import React, { useState, useEffect, useContext } from "react";
import $ from "jquery";
import AuthContext from "../../context/AuthProvider";

export default function NavBar() {
  const { isAuthenticated, onSignout } = useContext(AuthContext);

  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    $(window).on("scroll", function () {
      if ($(window).scrollTop()) {
        $("nav").addClass("black");
      } else {
        $("nav").removeClass("black");
      }
    });
  }, []);

  const handleNavToggle = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <header>
        <nav>
          <div class="menu-icon">
            <i class="fa fa-bars fa-2x"></i>
          </div>
          <div class="logo">
            <a href="./">MOOC</a>
          </div>
          <div class="menu">
            <ul>
              <li>
                <a href="./#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              {!isAuthenticated && (
                <li>
                  <a href="./login">Signin</a>
                </li>
              )}
              {isAuthenticated && <li onClick={onSignout}>Signout</li>}
              {!isAuthenticated && (
                <li>
                  <a href="./registration">Signup</a>
                </li>
              )}
              {isAuthenticated && (
                <li>
                  <a href="./Profile">Profile</a>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
