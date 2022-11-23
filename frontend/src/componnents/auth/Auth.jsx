import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { logIn, signUp } from "../../actions/AuthActions.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Auth = () => {
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
    </div>
  );
};

export default Auth;
