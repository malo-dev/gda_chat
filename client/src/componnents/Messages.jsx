import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'
import {BiSearch} from 'react-icons/bi'
import ActiveFriends from './ActiveFriends'
import Friend from './Friend'
import RightSide from './RightSide'
const Messages = () => {
  return (
	  <div className="messenger">
		  <div className="row">
			  <div className="col-3">
				  <div className="left-side">
					  <div className="top">
						  <div className="image-name">
							  <div className="image">
								  <img src='/image/brain.png' alt="" />
							  </div>
							  <div className="name">
								  <h3>malo</h3>
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
						  <div className="hover-friend">
							  <Friend />
						  </div>
					  </div>
				  </div>
			  </div>
			  <RightSide/>
		  </div>
	  </div>
  )
}

export default Messages