import React from 'react'
import { TbWorld } from 'react-icons/tb';
import { RiNotification3Line } from 'react-icons/ri';
import { BiMessageDetail } from 'react-icons/bi';
import { AiOutlineMenuFold, AiOutlineSearch } from 'react-icons/ai';
import { FiSettings, FiInfo } from 'react-icons/fi';
import { faker } from '@faker-js/faker';
import './topBar.scss';
function topbar() {
    return (
        <div className='topBar'>
            <div className='topBar-searchInput'><input type="text" placeholder='Search...' />< AiOutlineSearch className='topBar-searchIcon' /></div>
            <div className="topBar-list">
                <div className="topBar-Dashboard"><TbWorld className='topBar-icons' /><span className='language'>English</span></div>
                <div className="topBar-Dashboard"><RiNotification3Line className='topBar-icons' /><span className='sideBar-value'>1</span></div>
                <div className="topBar-Dashboard"><BiMessageDetail className='topBar-icons' /><span className='sideBar-value'>2</span></div>
                <div className="topBar-Dashboard"><AiOutlineMenuFold className='topBar-icons' /></div>
                <div className="topBar-Dashboard"><img src={faker.image.avatar()} /></div>
                <div className="topBar-Dashboard"><FiSettings className='topBar-icons' /></div>
                <div className="topBar-Dashboard"><FiInfo className='topBar-icons' /></div>
            </div>
        </div>
    )
}

export default topbar