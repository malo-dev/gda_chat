import React,{useEffect,useState,useRef} from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'
import {BiSearch} from 'react-icons/bi'
import ActiveFriends from './ActiveFriends'
import Friend from './Friend'
import RightSide from './RightSide'
import { useDispatch,useSelector } from 'react-redux'
import { getFriends,messageSend,getMessage, ImageMessageSend}  from '../store/actions/messengerAction'
const Messages = () => {
	const scrollRef = useRef()
	const dispatch = useDispatch()
	const { friends,message } = useSelector(state => state.messenger)
	const [newMessage,setNewMessage] = useState("")
	const inputHandle = (e) => {
		setNewMessage(e.target.value)
	}
	const SendMessage = (e) => {
		e.preventDefault()
		const data = {
			senderName: myInfo.username,
			reseverId: currentFriend._id,
			message : newMessage ? 'Sent' :'No sent'
		}
		dispatch(messageSend(data))
		
	}
	const { myInfo } = useSelector(state => state.auth)
	const [currentFriend,setCurrentFriend] = useState("")
	
	const handlefunction = async () => {
		dispatch(getFriends())
	}
	const handlemess =  async (friends) => {
		if (friends && friends.length > 0) {
			setCurrentFriend(friends[0])
		}
	}
	
	const handleGetMessage = async () => {
		dispatch(getMessage(currentFriend._id))
	}
	const emojiSend = (emu) => {
		setNewMessage(`${newMessage}` + emu)
	}
	const Imagesend = (e) => {
		if (e.target.files.length !== 0) {
			const imagename = e.target.files[0].name;
			const newImageName = Date.now() + imagename;
			const formData = new FormData()
			formData.append('imageName',newImageName)
			formData.append('senderName', myInfo.username);
			formData.append('reseverId', currentFriend._id)
			formData.append('image', e.target.files[0])
			dispatch(ImageMessageSend(formData));   
		}
	}
	
	const messageImg = async () => {
		scrollRef.current?.scrollIntoView({behavior : 'smooth'})
	}
	useEffect(() => {
		handlefunction()
		handlemess()
		handleGetMessage()
		messageImg()
	})
	
	// useEffect(() => {
		
	// })
	
	// useEffect(() => {
		
		
	// })
	// useEffect(() => {
		
	// })
	
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
									  <div className={currentFriend._id === fd.id ? "hover-friend active " : ""} onClick={()=>setCurrentFriend(fd)}>
										  <Friend friend={ fd} />
									  </div>
								 )
							 }) : "no friends "
						  }
						 
					  </div>
				  </div>
			  </div>
			  {
				  currentFriend ? <RightSide
					  currentFriend={currentFriend}
					  inputHandle={inputHandle}
					  newMessage={newMessage}
					  SendMessage={SendMessage}
					  message={message}
					  scrollRef={scrollRef}
					  emojiSend={emojiSend}
					  Imagesend={Imagesend}
				  /> : "Please Select You Friend"
			  }
			  
		  </div>
	  </div>
  )
}

export default Messages