import React from 'react'
import {RiGalleryLine} from 'react-icons/ri'
import { BsPlusCircle } from 'react-icons/bs'
import { BiMessageAltEdit } from 'react-icons/bi'
import { AiFillGift } from 'react-icons/ai'
import {GrSend} from 'react-icons/gr' 
const MessageSend = () => {
	const emojis = [
		'😅','😆','😇',
		'😈','😋','😎',
		'😐','😤','😩',
		'😫','😵','😶',
		'😸','😹','😺',
		'😻','😼','😽',
		'😾','🃏' ,'🆑' ,'🆓' ,'🆖' 
		,'🆘' ,'🌁' ,'🌉' ,'🌋' ,
		'🌌' ,'🌍' ,'🌎' ,'🌏' ,
		'🌐' ,'🌒','🌓' ,'🌔' ,
		'🌕', '🌖', '🌗', '🌘',
		'🌚', '🌛', '🌜', '🌝', '🌞' 
	]
	
	
	
	
	
	
	return (
		<div className="message-send-section">
			<input type="checkbox"  id='emoji'/>
			<div className="file hover-attachement">
				<div className="add-attachement">
					Add Atachment
				</div>
				<BsPlusCircle/>
			</div>
			<div className="file hover-image">
				<div className="add-image">
					Add image
				</div>
				<input type="file" id='pic' className='form-control' />
				<label htmlFor="pic"><RiGalleryLine/></label>
			</div>
			
			<div className="file">
				<BiMessageAltEdit/>
			</div>
			<div className="file hover-gift">
				<div className="add-gift">
					Add GIft
				</div>
				<AiFillGift/>
			</div>
			<div className="message-type">
				<input type="text" name='message'
					placeholder='Aa'
					id='message'
					className='form-control' />
				<label htmlFor='emoji'> 😅</label>
			</div>
			<div className="file">
				<GrSend />
			</div>
			<div className="emoji-section">
				<div className="emoji">
					{
						emojis.map(e => {
							return (
								<span>{e}</span>
							)
						})
					}
				</div>
			</div>
		</div>
	)
}

export default MessageSend
