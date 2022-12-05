import React from 'react'

const Message = () => {
	return (
		<div className='message-show'>
			<div className="my-message">
				<div className="image-message">
					<div className="my-text">
						<p className="message-text">
							how are you ?
						</p>
					</div>
				</div>
				<div className="time">
					2 juin 2022
				</div>
			</div>
			<div className="fd-message">
				<div className="image-message-time">
					<img src="/image/brain.png" alt="" />
					<div className="message-time">
						<div className="fd-text">
							<p className="message-text">
								hi i am malo
							</p>
						</div>
						<div className="time">
						2 juin 2022
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Message
