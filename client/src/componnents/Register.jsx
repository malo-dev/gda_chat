import React from 'react'
import {Link} from 'react-router-dom'
const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="card-header">
            <h3>Register</h3>
        </div>
        <div className="card-body">
          <form>
            
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" placeholder='username' className='form-control' id='username' />
            </div>
            
             <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder='email' className='form-control' id='email' />
            </div>
                
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder='password' className='form-control' id='password' />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" placeholder='confirm password' className='form-control' id='confirmPassword' />
            </div>
            <div className="form-group">
              <div className="file-image">
                <div className="image">
                  
                </div>
                <div className="file" style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  
                }}>
                  <label htmlFor="image">Upload Image</label>
                  <input type="file"  style={{display : "none"}} id="image" className='form-control' />
                </div>
              </div>
              
            </div>
            <div className="form-group">
              <input type="submit " value="register" className='btn' />
            </div>
            <div className="form-group">
              <span><Link to = '/messenger/login'>Login to your account</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register