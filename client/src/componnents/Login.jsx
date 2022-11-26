import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="card-header">
        <h3>login</h3>
        </div>
        <div className="card-body">
          <form action="">
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder='email' className='form-control' id='email' />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder='password' className='form-control' id='password' />
            </div>
            <div className="form-group">
              <input type="submit " value="login" className='btn' />
            </div>
            <div className="form-group">
              <span><Link to = '/messenger/register'>register to your account</Link></span>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login