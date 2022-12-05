import React from 'react'
import {BsChevronDown} from 'react-icons/bs'
const FriendInfo = () => {
	return (
		<div className="friend-info">
			<input type="checkbox" id='gallery' />
			<div className="image-name">
				<div className="image">
					<img src="/image/brain.png " alt="" />
				</div>
				<div className="active-user">
					Active
				</div>
				<div className="name">
					<h4>Malo dev</h4>
				</div>
			</div>
			<div className="others">
				<div className="custom-chat">
					<h3>Customize Chat</h3>
					<BsChevronDown/>
				</div>
				<div className="privacy-chat">
					<h3>Privacy and Support</h3>
					<BsChevronDown/>
				</div>
				<div className="media">
					<h3>Share Media</h3>
					<label htmlFor='gallery'><BsChevronDown/></label>
				</div>
			</div>
			<div className="gallery" >
				<img src="/image/brain.png" alt="" />
				<img src="/image/brain.png" alt="" />
				<img src="/image/brain.png" alt="" />
			</div>
		</div>
	)
}

export default FriendInfo
