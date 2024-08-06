import React from 'react';

export default function CustomIcon({ icon, subIcon, iconColor, arrowIcon }) {
    return (
        !arrowIcon ? (
            <div className="custom-icon-container" style={{ backgroundColor: `${iconColor}80` }}>
                <i className="main-icon-container">
                    {icon}
                </i>
                <i className="sub-icon-container">
                    {subIcon}
                </i>
            </div>
        ) : (
            <div className="custom-icon-container" style={{ backgroundColor: `${iconColor}80` }}>
                <div className="main-icon-container d-flex flex-row">
                    <i className='arrowone'>{icon}</i>
                    {/* <i className='arrowtwo'>{icon}</i> */}
                </div>
                <i className="dollar-icon">
                    {subIcon}
                </i>
            </div>
        )
    );
}
