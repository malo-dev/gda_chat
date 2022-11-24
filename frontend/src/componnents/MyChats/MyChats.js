import axios from 'axios'
import React from 'react'

const MyChats = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  // const user = localStorage.getItem("profile")
  const Token = (user.token);
  const config = {
     headers: {
          Authorization: `Bearer ${Token}`,
        }
  }
  try {
    const getAlluser = async () => {
     await axios.get("http://localhost:5000/api/chat", config)
    .then((res) => {
          console.log(res);
    })
     
  }
   getAlluser()
} catch (error) {
  
} 
 
  return (
    <div>
      <div className="leftside" >
        <img src={user.pic} alt="profile" />
        <div className='leftside-tools' style={{display : "flex",flexDirection: "row"}}>
          <h3>{user.name}</h3>
        </div>
      </div>
    </div>
  )
}

export default MyChats