import React, { useState, useEffect } from 'react';
import { MdWindow } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { IoStatsChart, IoBagCheckOutline } from "react-icons/io5";
import { LuCalendarCheck } from "react-icons/lu";
import { IoMdWallet } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const navItems = [
        { id: 1, icon: <GoHomeFill className="nav-icon" />, path: '/home' },
        { id: 2, icon: <IoStatsChart className="nav-icon" />, path: '/chart' },
        { id: 3, icon: <LuCalendarCheck className="nav-icon" />, path: '/calendar' },
        { id: 4, icon: <IoMdWallet className="nav-icon" />, path: '/profit' },
        { id: 5, icon: <IoBagCheckOutline className="nav-icon" />, path: '/finance' },
    ];

    useEffect(() => {
        const currentPath = location.pathname;
        const activeNavItem = navItems.find(item => item.path === currentPath);
        setActiveIndex(activeNavItem ? activeNavItem.id : 1);
    }, [location.pathname, navItems]);

    return (
        <div className="sidebar-container">
            <nav className="nav-items">
                <div className="nav-list">
                    <li className='nav-list-item logo-item'>
                        <MdWindow className="nav-icon logo-icon" />
                    </li>
                    {navItems.map((item) => (
                        <Link
                            to={item.path}
                            key={item.id}
                            className={`nav-list-item ${activeIndex === item.id ? 'active' : ''}`}
                            onClick={() => setActiveIndex(item.id)}
                        >
                            {item.icon}
                            {activeIndex === item.id && (
                                <div className="nav-item-active"></div>
                            )}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
}
