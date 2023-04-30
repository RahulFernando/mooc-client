import React from "react";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./registration.css";
import NavBar from "../../components/Navigation/NavBar";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

import { useMutation } from "@tanstack/react-query";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { postRegister } from "./services";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Registration = () => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const {
    isLoading,
    isSuccess,
    error,
    mutate: registerAsync,
  } = useMutation({
    mutationFn: postRegister,
  });

  const [userName, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [enabled, setEnabled] = useState(true);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(userName));
  }, [userName]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
    setValidMatch(password === matchPwd);
  }, [password, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [userName, password, matchPwd]);

  useEffect(() => {
    if (isSuccess) navigate("/login");
  }, [isSuccess, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(userName);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }

    const userData = {
      userName,
      password,
      createdAt,
      updatedAt,
      firstName,
      lastName,
      email,
      phoneNumber,
      enabled,
    };

    registerAsync({
      email: userData.email,
      username: userData.userName,
      password: userData.password,
    });

    // try {
    //   const response = await axios.post(
    //     REGISTER_URL,
    //     JSON.stringify(userData),
    //     {
    //       headers: { "Content-Type": "application/json" },
    //       withCredentials: true,
    //     }
    //   );
    //   // TODO: remove console.logs before deployment
    //   console.log(JSON.stringify(response?.data));
    //   setSuccess(true);
    //   //clear state and controlled inputs
    //   setUser("");
    //   setPwd("");
    //   setMatchPwd("");
    // } catch (err) {
    //   if (!err?.response) {
    //     setErrMsg("No Server Response");
    //   } else if (err.response?.status === 409) {
    //     setErrMsg("Username Taken");
    //   } else {
    //     setErrMsg("Registration Failed");
    //   }
    //   errRef.current.focus();
    // }
  };

  return (
    <>
      <NavBar />
      <div>
        <p
          ref={errRef}
          className={error ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {error?.message}
        </p>
        <form onSubmit={handleSubmit}>
          <MDBContainer fluid className="bg-dark">
            <MDBRow className="d-flex justify-content-center align-items-center h-100">
              <MDBCol>
                <MDBCard className="my-4">
                  <MDBRow className="g-0">
                    <MDBCol md="4" className="d-none d-md-block">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                        alt="Sample photo"
                        className="rounded-start"
                        fluid
                      />
                    </MDBCol>

                    <MDBCol md="6">
                      <MDBCardBody className="text-black d-flex flex-column justify-content-center">
                        <h3 className="mb-5 text-uppercase fw-bold">
                          Student registration form
                        </h3>

                        <MDBRow>
                          <MDBCol md="6">
                            <label htmlFor="username">
                              Username:{" "}
                              <FontAwesomeIcon
                                icon={faCheck}
                                className={validName ? "valid" : "hide"}
                              />
                              <FontAwesomeIcon
                                icon={faTimes}
                                className={
                                  validName || !userName ? "hide" : "invalid"
                                }
                              />
                            </label>
                            <MDBInput
                              wrapperClass="mb-4"
                              label="username"
                              size="lg"
                              id="username"
                              type="text"
                              ref={userRef}
                              autoComplete="off"
                              onChange={(e) => setUser(e.target.value)}
                              value={userName}
                              required
                              aria-invalid={validName ? "false" : "true"}
                              aria-describedby="uidnote"
                              onFocus={() => setUserFocus(true)}
                              onBlur={() => setUserFocus(false)}
                            />
                          </MDBCol>

                          <MDBCol md="6">
                            <label>FirstName: </label>
                            <MDBInput
                              wrapperClass="mb-4"
                              label="First Name"
                              size="lg"
                              id="firstName"
                              type="text"
                              onChange={(e) => setFirstName(e.target.value)}
                              name="firstName"
                              value={firstName}
                              required
                            />
                          </MDBCol>

                          <MDBCol md="6">
                            <label>LastName: </label>
                            <MDBInput
                              wrapperClass="mb-4"
                              label="Last Name"
                              size="lg"
                              id="lastName"
                              type="text"
                              onChange={(e) => setLastName(e.target.value)}
                              value={lastName}
                            />
                          </MDBCol>

                          <MDBCol md="6">
                            <label>Email: </label>
                            <MDBInput
                              wrapperClass="mb-4"
                              label="Email"
                              size="lg"
                              id="email"
                              type="text"
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                            />
                          </MDBCol>

                          <MDBCol md="6">
                            {/* <p
                            id="pwdnote"
                            className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}
                          >
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.
                            <br />
                            Must include uppercase and lowercase letters, a number and a
                            special character.
                            <br />
                            Allowed special characters:{' '}
                            <span aria-label="exclamation mark">!</span>{' '}
                            <span aria-label="at symbol">@</span>{' '}
                            <span aria-label="hashtag">#</span>{' '}
                            <span aria-label="dollar sign">$</span>{' '}
                            <span aria-label="percent">%</span>
                          </p> */}
                            <label htmlFor="password">
                              Password:
                              <FontAwesomeIcon
                                icon={faCheck}
                                className={validPwd ? "valid" : "hide"}
                              />
                              <FontAwesomeIcon
                                icon={faTimes}
                                className={
                                  validPwd || !password ? "hide" : "invalid"
                                }
                              />
                            </label>
                            <MDBInput
                              wrapperClass="mb-4"
                              label="Password"
                              size="lg"
                              id="password"
                              type="password"
                              onChange={(e) => setPwd(e.target.value)}
                              value={password}
                              required
                              aria-invalid={validPwd ? "false" : "true"}
                              aria-describedby="pwdnote"
                              onFocus={() => setPwdFocus(true)}
                              onBlur={() => setPwdFocus(false)}
                            />
                          </MDBCol>

                          <MDBCol md="6">
                            <label htmlFor="confirm_pwd">
                              Confirm Password:
                              <FontAwesomeIcon
                                icon={faCheck}
                                className={
                                  validMatch && matchPwd ? "valid" : "hide"
                                }
                              />
                              <FontAwesomeIcon
                                icon={faTimes}
                                className={
                                  validMatch || !matchPwd ? "hide" : "invalid"
                                }
                              />
                            </label>
                            <MDBInput
                              wrapperClass="mb-4"
                              label="Conform Password"
                              size="lg"
                              id="confirm_pwd"
                              type="PASSWORD"
                              onChange={(e) => setMatchPwd(e.target.value)}
                              value={matchPwd}
                              required
                              aria-invalid={validMatch ? "false" : "true"}
                              aria-describedby="confirmnote"
                              onFocus={() => setMatchFocus(true)}
                              onBlur={() => setMatchFocus(false)}
                            />
                          </MDBCol>
                        </MDBRow>

                        <MDBInput
                          wrapperClass="mb-4"
                          label="Mobile"
                          size="lg"
                          id="phoneNumber"
                          type="mobile"
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          value={phoneNumber}
                        />

                        <div className="d-flex justify-content-end pt-3">
                          <MDBBtn color="light" size="lg">
                            Reset all
                          </MDBBtn>
                          <MDBBtn
                            className="ms-2"
                            color="warning"
                            size="lg"
                            disabled={
                              !validName ||
                              !validPwd ||
                              !validMatch ||
                              isLoading
                                ? true
                                : false
                            }
                          >
                            {!isLoading && "Submit form"}
                            {isLoading && "Please wait..."}
                          </MDBBtn>
                        </div>
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </form>
      </div>
    </>
  );
};

export default Registration;
