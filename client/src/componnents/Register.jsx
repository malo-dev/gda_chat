import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userRegister } from '../store/actions/authAction'

const Register = () => {
  const dispatch = useDispatch()
  const [state, setstate] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    image : ""
  });
  const [loadImage,setLoadImage] = useState("")
  const inputHandler = (e) => {
    setstate({
      ...state,
      [e.target.name] : e.target.value
    })
  }
  const fileHandler = (e) => {
    if (e.target.files.length !== 0) {
      setstate({
        ...state,
        [e.target.name] : e.target.value
      })
    }
    const reader = new FileReader()
    reader.onload = () => {
      setLoadImage(reader.result)
    }
    reader.readAsDataURL(e.target.files[0])
  }
  
  const register = (e) => {
    const{username,email,password,confirmPassword,image} = state
    e.preventDefault()
    const formData = new FormData()
    formData.append('username', username)
    formData.append('email', email)
    formData.append('password', password)
    formData.append('confirmPassword', confirmPassword)
    formData.append('image', image)
    dispatch(userRegister(formData))
    // console.log(state);
  }
  return (
    <div className="register">
      <div className="card">
        <div className="card-header">
            <h3>Register</h3>
        </div>
        <div className="card-body">
          <form  >  
            
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" placeholder='username' value={state.username} name="username"className='form-control' id='username' onChange={inputHandler} />
            </div>
            
             <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder='email' name="email" value={state.email} className='form-control' id='email' onChange={inputHandler} />
            </div>
                
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder='password' name="password" value={state.password} className='form-control' id='password' onChange={inputHandler} />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" placeholder='confirm password' value={state.confirmPassword} name="confirmPassword" className='form-control' id='confirmPassword' onChange={inputHandler} />
            </div>
            <div className="form-group">
              <div className="file-image">
                <div className="image">
                  {loadImage ? <img src={loadImage} alt="profile"/> :  ""}
                </div>
                <div className="file" style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  
                }}>
                  <label htmlFor="image">Upload Image</label>
                  <input type="file"  style={{display : "none"}} id="image" name="image" className='form-control' onChange={fileHandler}   />
                </div>
              </div>
              
            </div>
            <div className="form-group">
              <input type="submit" value="register" className='btn' onClick={register}/>
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