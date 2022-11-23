import React, { useState } from "react";

import "./Auth.css";
import Logo from "../../img/logo.png";
import { logIn, signUp } from "../../actions/AuthActions.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast,toastOptions,ToastContainer } from "react-toastify/dist/components";

const Auth = () => {
  const [ pic, setPic ] = useState()
  const [upload, setUpload] = useState(false)
  const postDetails = async (tof) => {
    setUpload(true)
    if (tof === undefined) {
      toast.warning('Enter an Image', toastOptions)
      return;
    }
    if (tof.type === 'image/pjeg' || tof.type === 'image/png' || tof.type === 'image/jpg') {
      const data = new FormData()
      data.append('file', tof)
      data.append('upload_preset', 'chat-app')
      data.append('cloud_name', 'md-chatapp-mern')
      await fetch('https://api.cloudinary.com/v1_1/md-chatapp-mern/image/upload', {
        method: 'POST',
        body: data,
      }).then(res => res.json())
        .then(data => {
          setPic(data)
          setUpload(false)
        })
        .catch((err) => {
          toast.error(err, toastOptions)
          setUpload(false)
        })
    } else {
      toast.error('An Error occured', toastOptions);
      setUpload(false)
    }
  }
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmpass: "",
    pic: "",
  };
  const loading = useSelector((state) => state.authReducer.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);

  const [data, setData] = useState(initialState);

  const [confirmPass, setConfirmPass] = useState(true);
  
  const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data, navigate))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data, navigate));
    }
  };

  return (
    <div className="Auth">

      <div className="a-left">
        <img src={Logo} alt="" />

        <div className="Webname">
          <h1>MaloChat</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Register" : "Login"}</h3>
         
            <div>
               {isSignUp && (<input
                required
                type="text"
                placeholder=" Name"
                className="infoInput"
                name="name"
                value={data.name}
                onChange={handleChange}
              /> )}
              <input
                required
                type="email"
                placeholder="email"
                className="infoInput"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>
         
          <div>
            <input
              required
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            {isSignUp && (
              <input
                required
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            )}
          </div>
 <div>
            {isSignUp && (<input
              required
              type="file"
              className="infoInput"
              name="pic"
              value={data.pic}
              onChange={handleChange}
              onClick = {postDetails}
            />)}
          </div>
          <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
            *Confirm password is not same
          </span>
          <div>
            <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                resetForm();
                setIsSignUp((prev) => !prev);
              }}
            >
              {isSignUp
                ? "Already have an account Login"
                : "Don't have an account Sign up"}
            </span>
            <button
              className="button infoButton"
              type="Submit"
              disabled={loading}
            >
              {loading ? "Loading..." : isSignUp ? "SignUp" : "Login"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Auth;
