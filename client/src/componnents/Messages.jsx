import React,{useEffect} from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'
import {BiSearch} from 'react-icons/bi'
import ActiveFriends from './ActiveFriends'
import Friend from './Friend'
import RightSide from './RightSide'
import { useDispatch,useSelector } from 'react-redux'
import getFriends  from '../store/actions/messengerAction'
const Messages = () => {
	const { friends } = useSelector(state => state.messenger)
	const {myInfo} = useSelector(state => state.auth)
	const dispatch = useDispatch()
	const handlefunction = async () => {
		dispatch(getFriends())
	}
	useEffect(() => {
		handlefunction()
	})
  return (
	  <div className="messenger">
		  <div className="row">
			  <div className="col-3">
				  <div className="left-side">
					  <div className="top">
						  <div className="image-name">
							  <div className="image">
								  <img src={`./image/${myInfo.image}`} alt={myInfo.username} />
							  </div>
							  <div className="name">
								  <h3>{ myInfo.username }</h3>
							  </div>
						  </div>
						  <div className="icons">
							  <div className="icon">
								  <BsThreeDots />
							  </div>
							  <div className="icon">
								  <FaEdit />
							  </div>
						  </div>
					  </div>
					  <div className="friend-search">
						  <div className="search">
							  <button className='btn-s'>
								  <BiSearch />
							  </button>
							  <input type="text"
							  placeholder='Search'
								  className="form-control" />
						  </div>
					  </div>
					  <div className="active-friends">
					  	<ActiveFriends/>
					  </div>
					  <div className="friends">
						  {
							  friends && friends.length > 0 ? friends.map((fd) => {
								  return (
									  <div className="hover-friend">
										  <Friend friend={ fd} />
									  </div>
								 )
							 }) : "no friends "
						  }
						 
					  </div>
				  </div>
			  </div>
			  <RightSide/>
		  </div>
	  </div>
  )
}

export default Messages