
import React from 'react'

import '../../styles/Header.css'



import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AppsIcon from '@mui/icons-material/Apps';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';



const index = ({userPhoto}) => {
  return (
    <div className='header'>
            <div className="header__logo">
                <img src='/images.png' alt="Google Drive" />
                <span>Drive</span>
            </div>
            <div className="header__searchContainer">
                <div className="header__searchBar">
                    <SearchIcon />
                    <input type="text" placeholder='Search in Drive' />
                    <ExpandMoreIcon />
                </div>
            </div>
            <div className="header__icons">
                <span>
                   <HelpOutlineIcon/>
                   <SettingsIcon/>
                </span>
                <AppsIcon/>
                <img src={userPhoto} alt="User Photo"/>
           
            </div>
        </div>
  )
}

export default index
