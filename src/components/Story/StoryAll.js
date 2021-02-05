import React from 'react'
import Story from './Story'
import './StoryAll.css'
import avatar1 from '../../images/avatar1.jpg'
import avatar2 from '../../images/avatar2.jpg'
import avatar3 from '../../images/avatar3.jpg'
import avatar4 from '../../images/avatar4.jpg'
import avatar5 from '../../images/avatar5.jpg'
function StoryAll(props) {
    return (
        <div className="storyAll">
            <Story 
               image={avatar1}
               profileSrc={avatar1}
               title="Meo 1"
               
            />
             <Story 
               image={avatar2}
               profileSrc={avatar2}
               title="Meo 2"
               
            />
             <Story 
               image={avatar3}
               profileSrc={avatar3}
               title="Meo 3"
             
            />
             <Story 
               image={avatar4}
               profileSrc={avatar4}
               title="Meo 4"
            />
             <Story 
               image={avatar5}
               profileSrc={avatar5}
               title="Meo 5"
            />
        </div>
    )
}

export default StoryAll

