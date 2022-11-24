import React, { Fragment } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from "../../actions/AuthActions.js";
import { useNavigate } from 'react-router-dom';
const SideDrawer = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [searchResult, setsearchResult] = useState("")
  const [loading, setloading] = useState(false)
  const [loadingchat, setLoadingChat] = useState();
  const handleChange = (e) => {
    let search = e.target.value
  }
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
       
        <input
          type="search"
          placeholder="Search User"
          className="infoInput"
          style={{ height: "20px" }}
          onChange={handleChange}
        />
        <div>
          <img src="" alt="" />
          
          <button
            style={{height:"40px"}}
            className="button infoButton"
            onClick={() => {
              dispatch(logout(navigate))
              
            }}
          >LogOut</button>
        </div>
       
      </div>

  </div>)
  
}

export default SideDrawer