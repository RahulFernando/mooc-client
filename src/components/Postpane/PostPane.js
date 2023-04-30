import React from 'react'
import Home from '../../pages/Home/Home'
import './postPane.css'

export default function PostPane() {
  return (
    <div className='postPaneBox'>
      <div className="leftPaneContainer">
      <div class="popular_courses">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="section_title text-center mb-100">
                        <h3>Popular Courses</h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div class="course_nav">
                        <div>
                            <ul class="nav" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">All Courses</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Java</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">JavaScript</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="design-tab" data-toggle="tab" href="#design" role="tab" aria-controls="design" aria-selected="false">Python</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="Web-tab" data-toggle="tab" href="#Web" role="tab" aria-controls="design" aria-selected="false">Node JS</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="Web-tab1" data-toggle="tab" href="#Web1" role="tab" aria-controls="design" aria-selected="false"></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="Web-tab11" data-toggle="tab" href="#Web11" role="tab" aria-controls="design" aria-selected="false"></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="Adobe-XD-tab8" data-toggle="tab" href="#Adobe-XD8" role="tab" aria-controls="design" aria-selected="false"></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="Adobe-XD-tab9" data-toggle="tab" href="#Adobe-XD9" role="tab" aria-controls="design" aria-selected="false"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
       
              

                {/* <!-- our_courses_start --> */}
                <div class="our_courses">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="section_title text-center mb-100">
                                    <h3>Our Course Speciality</h3>
                                    <p>Your domain control panel is designed for ease-of-use and <br></br> allows for all aspects of your domains.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-3 col-md-6 col-lg-6">
                                <div class="single_course text-center">
                                    <div class="icon">
                                        <i class="flaticon-art-and-design"></i>
                                    </div>
                                    <h3>Premium Quality</h3>
                                    <p>Your domain control panel is designed for ease-of-use <br></br> and <br></br> allows for all aspects of </p>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6 col-lg-6">
                                <div class="single_course text-center">
                                    <div class="icon blue">
                                        <i class="flaticon-business-and-finance"></i>
                                    </div>
                                    <h3>Premium Quality</h3>
                                    <p>
                                        Your domain control panel is designed for ease-of-use <br></br> and <br></br> allows for all aspects of
                                    </p>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6 col-lg-6">
                                <div class="single_course text-center">
                                    <div class="icon">
                                        <i class="flaticon-premium"></i>
                                    </div>
                                    <h3>Premium Quality</h3>
                                    <p>
                                        Your domain control panel is designed for ease-of-use <br></br> and <br></br> allows for all aspects of
                                    </p>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6 col-lg-6">
                                <div class="single_course text-center">
                                    <div class="icon gradient">
                                        <i class="flaticon-crown"></i>
                                    </div>
                                    <h3>Premium Quality</h3>
                                    <p>
                                        Your domain control panel is designed for ease-of-use <br></br>and <br></br> allows for all aspects of
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- our_courses_end --> */}




              </div>        

      </div>
        
    </div>
  )
}
