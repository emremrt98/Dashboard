import React from 'react';
import TopBar from './TopBar/topbar';
import SideBar from './SideBar/sidebar';
import './home.scss';
function home() {
    return (
        <div className='Home'>
            <div className='SideBar'> <SideBar /> </div>
            <div className='TopBar'><TopBar /></div>
        </div>
    )
}

export default home