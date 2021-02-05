import React from 'react'
import MessageSender from '../MessageSender/MessageSender'
import StoryAll from '../Story/StoryAll'
import './Feed.css'
export default function Feed() {
    return (
        <div className="feed">
            <StoryAll/>
            <MessageSender/>
        </div>
    )
}
