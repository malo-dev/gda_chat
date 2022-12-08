import React from 'react'
import {IoCall} from 'react-icons/io5'
import { BsCameraVideoFill } from 'react-icons/bs'
import {HiDotsCircleHorizontal} from 'react-icons/hi'
import Message from './Message'
import MessageSend from './MessageSend'
import FriendInfo from './FriendInfo'
const RightSide = (props) => {
	const {
		currentFriend,
		inputHandle,
		newMessage,
		SendMessage,
		message,
		scrollRef,
		emojiSend,
		Imagesend
	} = props
	
	return (
		<div className="col-9">
			<div className="right-side">
				<input type="checkbox" id="dot" />
				<div className="row">
					<div className="col-8">
						<div className="message-send-show">
							<div className="header">
								<div className="image-name">
									<div className="image">
										<img src={`./image/${currentFriend.image}`} alt={currentFriend.username} />
										<div className="active-icon">
										
										</div>
									</div>
									<div className="name">
										<h3>{currentFriend.username }</h3>
									</div>
								</div>
								<div className="icons">
									<div className="icon">
										<IoCall/>
									</div>
									<div className="icon">
										<BsCameraVideoFill/>
									</div>
									<div className="icon">
										<label htmlFor='dot' style={{cursor:"pointer"}}><HiDotsCircleHorizontal/></label>
										
									</div>
								</div>
							</div>
							<Message
								message={message}
								currentFriend={currentFriend}
								scrollRef = {scrollRef}
							/>
							<MessageSend Imagesend={Imagesend} emojiSend={emojiSend} inputHandle={inputHandle} newMessage={newMessage} SendMessage={SendMessage} />
						</div>
					</div>
					<div className="col-4">
						<FriendInfo currentFriend={ currentFriend} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default RightSide
