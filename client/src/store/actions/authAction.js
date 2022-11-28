import axios from 'axios'
export const userRegister = (data) => {
	return async (dispatch) => {
		const config = {
			headers: {
				"Content-Type" : "application/son"
			}
		}
		try {
			const response  = await axios.post('/api/messenger/user-register',data,config)
		} catch (error) {
			
		}
	}
}