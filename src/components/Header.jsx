import React from 'react'
import Searchbar from './Searchbar'
import { LuMail } from 'react-icons/lu'
import { IoSettingsOutline, IoNotificationsOutline } from 'react-icons/io5'
import pic from '../profile.png'
import { Col, Row } from 'reactstrap'

export default function Header() {
    return (
        <Row className="d-flex align-items-center justify-content-between mx-2">
            <Col xs={12} sm={6} md={6} lg={6} xl={6} className="mb-2">
                <Searchbar />
            </Col>
            <Col className="d-flex align-items-center justify-content-end mx-2 py-2">
                <div>
                    <LuMail className="header-icon" />
                </div>
                <div>
                    <IoSettingsOutline className="header-icon" />
                </div>
                <div className="notification-wrapper">
                    <IoNotificationsOutline className="header-icon notification-icon" />
                    <span className="notification-dot"></span>
                </div>
                <div>
                    <img src={pic} className="profile-pic" alt="Profile" />
                </div>
            </Col>
        </Row>
    )
}
