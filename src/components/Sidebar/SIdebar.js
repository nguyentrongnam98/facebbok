
import React from 'react'
import SidebarRow from './SidebarRow';
import kute from '../../images/download.jpeg'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src={kute}/>
            <SidebarRow 
               Icon={LocalHospitalIcon}
               title="COVID-19 Quảng Ninh"
            />
               <SidebarRow 
               Icon={EmojiFlagsIcon}
               title="Pages"
            />
               <SidebarRow 
               Icon={PeopleIcon}
               title="Friends"
            />
               <SidebarRow 
               Icon={ChatIcon}
               title="Messenger"
            />
               <SidebarRow 
               Icon={StorefrontIcon}
               title="Markeplace"
            />
               <SidebarRow 
               Icon={VideoLibraryIcon}
               title="Videos"
            />
               <SidebarRow 
               Icon={ExpandMoreIcon}
               title="Markeplace"
            />
        </div>
    )
}

export default Sidebar;

