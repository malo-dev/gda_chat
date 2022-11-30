import { ERROR_MESSAGE_CLEAR, REGISTER_FAIL, REGISTER_SUCCESS, SUCCESS_MESSAGE_CLEAR } from "../types/authType"
import decodeToken from 'jwt-decode'
const authState = {
	loading: true,
	authenticate: false,
	error: "",
	successMessage: "",
	myInfo : ""
}
const tokenDecode = (token) => {
	const tokenDecoded = decodeToken(token);
	const expTime = new Date(tokenDecode.exp * 1000);
	if (new Date() > expTime) {
		return null
	}
	return tokenDecoded
	
}
const getToken = localStorage.getItem("authToken")
if(getToken){
	const getinfo = tokenDecode(getToken);
	if (getinfo) {
		authState.myInfo = getinfo
		authState.authenticate = true
		authState.loading = false
	}
}
export const authReducer = (state = authState, action) => {
	const { payload, type } = action
	if (type === REGISTER_FAIL) {
		return {
			...state,
			error: payload.error,
			authenticate: false,
			myInfo: "",
			loading : true
		 }
	}
	if (type === REGISTER_SUCCESS) { 
		const  myInfo = tokenDecode(payload.token)
		return {
			...state,
			myInfo: myInfo,
			successMessage: payload.successMessage,
			error: "",
			authenticate: true,
			loading : false
			
		}
	}
	if (type === SUCCESS_MESSAGE_CLEAR) {
		return {
			...state,
			successMessage : ""
		}
	}
	if (type === ERROR_MESSAGE_CLEAR) {
		return {
			...state,
			error : ""
		}
	}
	else {
		return state
	}
}