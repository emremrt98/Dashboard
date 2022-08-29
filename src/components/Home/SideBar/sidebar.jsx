import { Link } from "react-router-dom";
import { RiDashboardFill, RiNotification3Line, RiMentalHealthFill } from 'react-icons/ri';
import { AiOutlineUser, AiOutlineProfile } from 'react-icons/ai';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import { BsBorderStyle } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { ImStatsDots } from 'react-icons/im';
import { MdLogout } from 'react-icons/md';
import React from 'react';
import './sideBar.scss';

function sidebar() {
    return (
        <sidebar className="sideBar">
            <div className="logo"><h1 className="sideBar-Header">Makro Beyin</h1></div>
            <div className="dashboard">
                <span className="sideBar-title">MAIN</span>
                <br /><br />
                <div className="sideBar-menu"><RiDashboardFill className="sideBar-icons" /> <p>Dashboard</p></div>
            </div>
            <div className="dashboard">
                <span className="sideBar-title">LISTS</span>
                <br /><br />
                <div className="sideBar-menu"><SiHomeassistantcommunitystore className="sideBar-icons" /> <p>Products</p></div>
                <div className="sideBar-menu"><BsBorderStyle className="sideBar-icons" /><p>Orders</p></div>
                <div className="sideBar-menu"><AiOutlineUser className="sideBar-icons" /> <p>Users</p></div>
                <div className="sideBar-menu"><TbTruckDelivery className="sideBar-icons" /> <p>Delivery</p></div>

            </div>
            <div className="dashboard">
                <span className="sideBar-title">USEFUL</span>
                <br /><br />
                <div className="sideBar-menu"><ImStatsDots className="sideBar-icons" /> <p>Stats</p></div>
                <div className="sideBar-menu"><RiNotification3Line className="sideBar-icons" /> <p>Notifications</p></div>

            </div>
            <div className="dashboard">
                <span className="sideBar-title">SERVICE</span>
                <br /><br />
                <div className="sideBar-menu"><RiMentalHealthFill className="sideBar-icons" /> <p>System Health</p></div>
                <div className="sideBar-menu"><RiMentalHealthFill className="sideBar-icons" />  <p>Logs</p></div>
                <div className="sideBar-menu"><RiMentalHealthFill className="sideBar-icons" />  <p>Logs</p></div>

            </div>
            <div className="dashboard">
                <span className="sideBar-title">USER</span>
                <br /><br />
                <div className="sideBar-menu"><AiOutlineProfile className="sideBar-icons" /> <p>Profile</p></div>
                <div className="sideBar-menu"><MdLogout className="sideBar-icons" /> <p>Logout</p></div>

            </div>
        </sidebar>
    )
}

export default sidebar