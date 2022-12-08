import formidable from "formidable";
import * as url from 'url';
import MessageModel from "../../models/MessageModel.js";
import fs from 'fs'
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const imagemMessageSend = (req, res) => {
	const senderId = req.myId
	const form = formidable();
	form.parse(req, async (err, fields, files) => {
		// console.log(files)
			console.log(fields)
		const { senderName, reseverId, imageName } = fields;
		files.image.originalFilename = imageName
		let oldpath = files.image.filepath;
		// let newpath = __dirname + `../../../client/public/image/${imageName}`
		
		let newpath = `/home/brijuth/codes/chat_gda/client/public/image/${files.image.originalFilename}`
		try {
			fs.rename(oldpath, newpath, async function (err) {
				if (err) {
					throw err
				// 	res.status(400).json({
				// 		error: {
				// 			errorMessage : "Image is not uploaded"
				// 		}
				// })
				};
				
			const insetMessage = await MessageModel.create(
				{
					senderId: senderId,
					reseverId: reseverId,
					message: {
						text: '',
						image : files.image.originalFilename
					}
				}
			)
			res.status(201).json({
				success: true,
				message: {
					senderId: senderId,
					reseverId: reseverId,
					senderName: senderName,
					message: {
						text: "",
						image : imageName
					}
				}
			})
		});
		} catch (error) {
			res.status(500).json({
				error : {errorMessage : "Internal Server error"}
			})
		}
	})
}

export default imagemMessageSend
