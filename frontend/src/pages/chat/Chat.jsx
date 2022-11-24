import React from 'react'
import {Box} from '@chakra-ui/layout'
import { useSelector } from 'react-redux';
import SideDrawer from '../../componnents/sidebar/SideDrawer';
import MyChats from '../../componnents/MyChats/MyChats';
import ChatBox from '../../componnents/chatBox/ChatBox';

const Chat = () => {
	const user = useSelector((state) => state.authReducer.authData);
	
	return (
		<div style={{ width: "100%"}}>
			{user && <SideDrawer/>}
			
				{user && <MyChats />}
				{user && <ChatBox/>}
		</div>
	)
}

export default Chat
