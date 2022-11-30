import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { userLogin } from '../store/actions/authAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { ERROR_MESSAGE_CLEAR, SUCCESS_MESSAGE_CLEAR } from '../store/types/authType';
const Login = () => {
  const navigate = useNavigate()
  const {loading,successMessage,error,authenticate,myInfo} = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [state, setState] = useState({
    email: "leader@gmail.com",
    password : "1234567",
  })
  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }
  const login = (e) => {
    e.preventDefault();
    dispatch(userLogin(state))
    
  }
   const userLoginValidation = async () => {
     if (authenticate) {
      navigate('/')
    }
    if (successMessage) {
      dispatch({type : SUCCESS_MESSAGE_CLEAR})
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
      
    }
    if (error) {
      dispatch({type : ERROR_MESSAGE_CLEAR})
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
    }
   }
  useEffect(() => {
    userLoginValidation()
  })
  return (
    <div className="login">
      <div className="card">
        <div className="card-header">
        <h3>login</h3>
        </div>
        <div className="card-body">
          <form  onClick={login}>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder='email' className='form-control' id='email'  value={state.email} onChange={inputHandler} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder='password' className='form-control' value={state.password} id='password' onChange={inputHandler} />
            </div>
            <div className="form-group">
              <input type="submit" value="register" className='btn' />
            </div>
            <div className="form-group">
              <span><Link to = '/messenger/register'>register to your account</Link></span>
            </div>
            
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Login