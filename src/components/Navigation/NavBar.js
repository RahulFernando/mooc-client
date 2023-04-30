import './navBar.css'
import React, { useState, useEffect } from "react";
import $ from "jquery";


export default function NavBar() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    $(window).on("scroll", function() {
      if ($(window).scrollTop()) {
        $('nav').addClass('black');
      } else {
        $('nav').removeClass('black');
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
               <div class="logo" >
               <a href="./">MOOC</a>
               </div>
               <div class="menu">
                  <ul>
                     <li><a href="./#">Home</a></li>
                     <li><a href="#">About</a></li>
                     <li><a href="#">Blog</a></li>
                     <li><a href="#">Contact</a></li>
                     <li><a href="./login">Signin</a></li>
                     <li><a href="./registration">Signup</a></li>
                  </ul>
               </div>
            </nav>
         </header>
      
    </>  )
}
