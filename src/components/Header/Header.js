import React from 'react'
import './Header.css'
import { Avatar, IconButton  } from '@material-ui/core'
import logo from '../../images/facebook.png';
import Search from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import kute from '../../images/download.jpeg'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
export default function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src={logo} alt="logo" height="40"/>
                <div className="header__input">
                <Search/>
                <input type="text" placeholder="Search facebook"/>
                </div>
            </div>
            <div className="header__center">
               <div className="header__option header__option--active">
                 <HomeIcon fontSize="large"/>
               </div>
               <div className="header__option">
                 <FlagIcon fontSize="large"/>
               </div>
               <div className="header__option">
                 <SubscriptionsIcon fontSize="large"/>
               </div>
               <div className="header__option">
                 <StorefrontIcon fontSize="large"/>
               </div>
               <div className="header__option">
                 <SupervisedUserCircleIcon fontSize="large"/>
               </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src = {kute}/>
                    <p>Nguyen Nam</p>
                </div>
                <IconButton>
                   <AddIcon/>
                </IconButton>
                <IconButton>
                   <ForumIcon/>
                </IconButton>
                <IconButton>
                   <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                   <ExpandMoreIcon/>
                </IconButton>
            </div>
        </div>
    )
}