import { Avatar } from '@material-ui/core'
import React , {useState} from 'react'
import './MessageSender.css'
import kute from '../../images/download.jpeg'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
function MessageSender(props) {
    const [input,setInput] = useState('')
    const [imageUrl,setImageUrl] = useState('')
    const handleSubmitClick=(e)=>{
       e.preventDefault()
       setInput()
       setImageUrl()
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={kute}/>
                <form action="">
                    <input type="text" placeholder="What's on your mind" className="messageSender__input" value={input} onChange={(e) => setInput(e.target.value)}/>
                    <input type="text" placeholder="image URL (Optional )" value={imageUrl} onChange={e => setImageUrl(e.target.value)} style={{borderRadius:'15px'}}/>
                    <button type="submit" onClick={(e)=>handleSubmitClick(e)}>Hidden submit</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color:'red'}}/>
                    <h4>Live Video</h4>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color:'green'}}/>
                    <h4>Photo/Video</h4>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color:'orange'}}/>
                    <h4>Feeling/Activity</h4>
                </div>
            </div>
        </div>
    )
}
export default MessageSender

