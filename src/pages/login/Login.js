import React, { useContext } from "react";
import "./login.css";
import NavBar from "../../components/Navigation/NavBar";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "../../components/Footer/Footer";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";

import { postLogin } from "./services";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

import AuthContext from "../../context/AuthProvider";

const Login = () => {
  const { onLoginSuccess } = useContext(AuthContext);

  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

  const {
    isLoading,
    data,
    error,
    mutate: loginAsync,
  } = useMutation({
    mutationFn: postLogin,
  });

  const [userName, setUser] = useState("");
  const [password, setPwd] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    if (data) {
      onLoginSuccess(data);
      navigate("/login");
    }
  }, [data, navigate, onLoginSuccess]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    loginAsync({ username: userName, password });
  };

  return (
    <>
      <NavBar />
      <section>
        <p
          ref={errRef}
          className={error ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {error?.message}
        </p>

        <form onSubmit={handleSubmit}>
          <div className="frame">
            <div className="login-box">
              <MDBContainer className="my-2">
                <MDBCard>
                  <MDBRow className="g-6">
                    <MDBCol md="5">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                        alt="login form"
                        className="rounded-start w-100"
                      />
                    </MDBCol>

                    <MDBCol md="6">
                      <MDBCardBody className="d-flex flex-column">
                        <div className="d-flex flex-row mt-2">
                          <MDBIcon
                            fas
                            icon="cubes fa-3x me-3"
                            style={{ color: "#ff6219" }}
                          />
                          <span className="h1 fw-bold mb-0">MOOCs</span>
                        </div>

                        <h5
                          className="fw-normal my-4 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign into your account
                        </h5>

                        <MDBInput
                          wrapperClass="mb-4"
                          label="Username"
                          type="text"
                          id="username"
                          ref={userRef}
                          autoComplete="off"
                          onChange={(e) => setUser(e.target.value)}
                          value={userName}
                          required
                          size="lg"
                        />
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Password"
                          type="password"
                          id="password"
                          onChange={(e) => setPwd(e.target.value)}
                          value={password}
                          required
                          size="lg"
                        />

                        <MDBBtn
                          className="mb-4 px-5"
                          color="dark"
                          size="lg"
                          disabled={isLoading}
                        >
                          {!isLoading && "Login"}
                          {isLoading && "Please wait..."}
                        </MDBBtn>
                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p
                          className="mb-5 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          Don't have an account?{" "}
                          <a href="/registration" style={{ color: "#393f81" }}>
                            Register here
                          </a>
                        </p>
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
              </MDBContainer>
            </div>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};
export default Login;
