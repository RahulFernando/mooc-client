import React from 'react'
import"./login.css" 
import NavBar from '../../components/Navigation/NavBar'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from '../../components/Footer/Footer'
import { useRef, useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
  } from 'mdb-react-ui-kit';



  import axios from '../../api/axios';
import { Padding } from '@mui/icons-material';
  const LOGIN_URL = '/api/v1/auth/login';
  
  const Login = () => {
      const { setAuth } = useAuth();
  
      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || "/";
  
      const userRef = useRef();
      const errRef = useRef();
  
      const [userName, setUser] = useState('');
      const [password, setPwd] = useState('');
      const [errMsg, setErrMsg] = useState('');
  
      useEffect(() => {
          userRef.current.focus();
      }, [])
  
      useEffect(() => {
          setErrMsg('');
      }, [userName, password])
  
      const handleSubmit = async (e) => {
          e.preventDefault();
  
          try {
              const response = await axios.post(LOGIN_URL,
                  JSON.stringify({ userName, password }),
                  {
                      headers: { 'Content-Type': 'application/json' },
                      withCredentials: true
                  }
              );
              console.log(JSON.stringify(response?.data));
              //console.log(JSON.stringify(response));
              const accessToken = response?.data?.accessToken;
              const roles = response?.data?.roles;
              setAuth({ userName, password, roles, accessToken });
              setUser('');
              setPwd('');
              navigate(from, { replace: true });
          } catch (err) {
              if (!err?.response) {
                  setErrMsg('No Server Response');
              } else if (err.response?.status === 400) {
                  setErrMsg('Missing Username or Password');
              } else if (err.response?.status === 401) {
                  setErrMsg('Unauthorized');
              } else {
                  setErrMsg('Login Failed');
              }
              errRef.current.focus();
          }
      }
  
      return (
        <>
        <NavBar/>
        <section>            
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>          
      
      

      <form onSubmit={handleSubmit}>

      <div className='frame' >
      
            <div className='login-box'>
            <MDBContainer className="my-2" >

                <MDBCard>
                <MDBRow className='g-6'>

                    <MDBCol md='5'>
                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
                    </MDBCol>

                    <MDBCol md='6'>
                    <MDBCardBody className='d-flex flex-column'>

                        <div className='d-flex flex-row mt-2'>
                        <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                        <span className="h1 fw-bold mb-0">MOOCs</span>
                        </div>

                        <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                        <MDBInput wrapperClass='mb-4' label='Email address'  type='text'id="username" ref={userRef} autoComplete="off" onChange={(e) => setUser(e.target.value)} value={userName} required  size="lg"/>
                        <MDBInput wrapperClass='mb-4' label='Password'  type='password' id="password"  onChange={(e) => setPwd(e.target.value)}  value={password} required size="lg"/>

                        <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
                        <a className="small text-muted" href="#!">Forgot password?</a>
                        <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="/registration" style={{color: '#393f81'}}>Register here</a></p>                        

                    </MDBCardBody>
                    </MDBCol>

                </MDBRow>
                </MDBCard>

            </MDBContainer>

            </div>       

    </div>   
         </form>
    </section>
    <Footer/>
        </>
    
    
  )
}
export default Login