import { FaAngleRight } from 'react-icons/fa'
import './CustomDropdown.css' // Import the CSS file

export default function CustomDropdown({ icon, text }) {
    return (
        <div className="d-flex align-items-center dropdown-container">
            <div className="p-2 m-1">{icon}</div>
            <div className="p-2 m-1">{text}</div>
            <div className="p-2 ms-auto">
                <FaAngleRight
                    className="custom-icon" // Add a class for the icon
                />
            </div>
        </div>
    )
}
