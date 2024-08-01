import React, { useState } from 'react';
import { MdWindow } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { IoStatsChart, IoBagCheckOutline } from "react-icons/io5";
import { LuCalendarCheck } from "react-icons/lu";
import { IoMdWallet } from "react-icons/io";

export default function Sidebar() {
    const [activeIndex, setActiveIndex] = useState(1); 

    const navItems = [
        { id: 1, icon: <GoHomeFill className="nav-icon" /> },
        { id: 2, icon: <IoStatsChart className="nav-icon" /> },
        { id: 3, icon: <LuCalendarCheck className="nav-icon" /> },
        { id: 4, icon: <IoMdWallet className="nav-icon" /> },
        { id: 5, icon: <IoBagCheckOutline className="nav-icon" /> },
    ];

    return (
        <div className="sidebar-container">
            <nav className="nav-items">
                <div className="nav-list">
                    <li className='nav-list-item logo-item'>
                    <MdWindow className="nav-icon logo-icon" />
                    </li>
                    {navItems.map((item, index) => (
                        <li
                            key={item.id}
                            className={`nav-list-item ${activeIndex === item.id ? 'active' : ''}`}
                            onClick={() => setActiveIndex(item.id)}
                        >
                            {item.icon}
                            {activeIndex === item.id && (
                                <div className="nav-item-active"></div>
                            )}
                        </li>
                    ))}
                </div>
            </nav>
        </div>
    );
}
