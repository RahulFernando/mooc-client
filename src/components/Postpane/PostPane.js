import React from "react";
import Home from "../../pages/Home/Home";
import CourseTab from "./CourseTab";
import "./postPane.css";

export default function PostPane({ isLoading, coureses }) {
  return (
    <div className="postPaneBox">
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
                {isLoading && <p>Loading...</p>}
                {!isLoading && <CourseTab courses={coureses} />}
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
                    <p>
                      Your domain control panel is designed for ease-of-use and{" "}
                      <br></br> allows for all aspects of your domains.
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
                    <p>
                      Your domain control panel is designed for ease-of-use{" "}
                      <br></br> and <br></br> allows for all aspects of{" "}
                    </p>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6 col-lg-6">
                  <div class="single_course text-center">
                    <div class="icon blue">
                      <i class="flaticon-business-and-finance"></i>
                    </div>
                    <h3>Premium Quality</h3>
                    <p>
                      Your domain control panel is designed for ease-of-use{" "}
                      <br></br> and <br></br> allows for all aspects of
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
                      Your domain control panel is designed for ease-of-use{" "}
                      <br></br> and <br></br> allows for all aspects of
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
                      Your domain control panel is designed for ease-of-use{" "}
                      <br></br>and <br></br> allows for all aspects of
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
  );
}
