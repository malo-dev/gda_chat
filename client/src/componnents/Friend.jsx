import React from 'react'

const Friend = ({ friend }) => {
  return (
	  <div className="friend">
		  <div className="friend-image active">
			  <div className="image">
				  <img src={ `/image/${friend.image}`} alt={friend.username} />
			  </div> 
		  </div>
		  <div className="friend-name">
			  <h4>{ friend.username }</h4>
		  </div>
	  </div>
  )
}

export default Friend
