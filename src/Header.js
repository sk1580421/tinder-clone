import React from 'react'
import './header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className="personicon" fontSize="large" />
            </IconButton>
            <img src="https://cdn131.picsart.com/275291797028211.png?type=webp&to=min&r=640" alt="" />
            <IconButton>

                <ForumIcon className="forumicon" fontSize="large" />
            </IconButton  >


        </div>
    )
}

export default Header
