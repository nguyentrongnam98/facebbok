import React from 'react'
import MessageSender from '../MessageSender/MessageSender'
import StoryAll from '../Story/StoryAll'
import Post from '../Post/Post'
import avatar6 from '../../images/avatar6.jpg'
import avatar7 from '../../images/avatar7.png'
import './Feed.css'
export default function Feed() {
    return (
        <div className="feed">
            <StoryAll/>
            <MessageSender/>
            <Post 
               profilePic={avatar6}
               image={avatar6}
               username="Nguyen Nam"
               timestamp="This is a timestamp"
               message="WOW this works!"
            />
             <Post 
               profilePic={avatar7}
               image={avatar7}
               username="Nguyen Nam"
               timestamp="This is a timestamp"
               message="WOW this works!"
            />
        </div>
    )
}
