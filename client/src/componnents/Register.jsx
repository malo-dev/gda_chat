import React,{useState,useEffect} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { userRegister } from '../store/actions/authAction'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { ERROR_MESSAGE_CLEAR, SUCCESS_MESSAGE_CLEAR } from '../store/types/authType';
const Register = ({history}) => {
  const navigate = useNavigate()
  const { loading,successMessage,error,authenticate,myInfo} = useSelector((state) => {
    return state.auth
  })
  console.log(myInfo);
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
        [e.target.name]: e.target.files[0]
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
  }
  const userRegisterValidation = async () => {
     if (authenticate) {
      navigate('/')
    }
    if (successMessage) {
     
       toast.success(successMessage, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
       })
       dispatch({type : SUCCESS_MESSAGE_CLEAR})
      
    }
    if (error) {
       error.map(err => toast.error(err,{
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
       }))
       dispatch({type : ERROR_MESSAGE_CLEAR})
    }
  }
  useEffect(() => {
   userRegisterValidation()
   
  })
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
      <ToastContainer/>
    </div>
  )
}

export default Register