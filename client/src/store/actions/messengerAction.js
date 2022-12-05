import axios from 'axios'
import { FRIENDS_GET_SUCCESS } from '../types/messengerType'
const getFriends = () => async (dispatch) => {
	try {
		const response = await axios.get('/api/messenger/get-friends')
		dispatch({
			type: FRIENDS_GET_SUCCESS,
			payload: {
				friends : response.data.friends
			}
		})
		console.log(response.data)
	} catch (error) {
		console.log(error.response.data);
	}
}
export default getFriends