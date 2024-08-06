import React, { useState, useEffect } from 'react'
import { MdWindow } from 'react-icons/md'
import { GoHomeFill } from 'react-icons/go'
import { IoStatsChart, IoBagCheckOutline } from 'react-icons/io5'
import { LuCalendarCheck } from 'react-icons/lu'
import { IoMdWallet } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'
import { RiLogoutCircleRLine } from 'react-icons/ri'

export default function Sidebar() {
    const location = useLocation()
    const [activeIndex, setActiveIndex] = useState(1)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const navItems = [
        { id: 1, icon: <GoHomeFill className="nav-icon" />, path: '/home' },
        { id: 2, icon: <IoStatsChart className="nav-icon" />, path: '/chart' },
        {
            id: 3,
            icon: <LuCalendarCheck className="nav-icon" />,
            path: '/calendar',
        },
        { id: 4, icon: <IoMdWallet className="nav-icon" />, path: '/profit' },
        {
            id: 5,
            icon: <IoBagCheckOutline className="nav-icon" />,
            path: '/finance',
        },
        {
            id: 6,
            icon: <RiLogoutCircleRLine className="nav-icon logout-btn" />,
            path: '/logout',
        },
    ]

    useEffect(() => {
        const currentPath = location.pathname
        const activeNavItem = navItems.find((item) => item.path === currentPath)
        setActiveIndex(activeNavItem ? activeNavItem.id : 1)
    }, [location.pathname, navItems])

    return (
        <div className="h-100 d-flex flex-column">
            <div className="flex-grow-1 d-flex flex-column align-items-center">
                <div className="nav-list-item logo-item">
                    <MdWindow className="nav-icon logo-icon" />
                </div>
                <div className="d-flex flex-column align-items-center">
                    {navItems
                        .filter((item) => item.path !== '/logout')
                        .map((item) => (
                            <Link
                                to={item.path}
                                key={item.id}
                                className={`nav-list-item d-flex align-items-center ${
                                    activeIndex === item.id ? 'active' : ''
                                }`}
                                onClick={() => setActiveIndex(item.id)}
                            >
                                {item.icon}
                                {activeIndex === item.id && (
                                    <div className="nav-item-active"></div>
                                )}
                            </Link>
                        ))}
                </div>
            </div>
            <div className="d-flex justify-content-center mt-auto mb-3">
                <Link
                    to="/logout"
                    className="nav-list-item d-flex align-items-center"
                >
                    <RiLogoutCircleRLine
                        className={`nav-icon logout-btn ${
                            activeIndex === 6 ? 'active' : ''
                        }`}
                    />
                    {activeIndex === 6 && (
                        <div className="nav-item-active"></div>
                    )}
                </Link>
            </div>
        </div>
    )
}
