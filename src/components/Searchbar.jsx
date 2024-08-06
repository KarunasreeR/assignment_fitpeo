import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'

function Searchbar(props) {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div className={`search-input-wrapper ${props.className}`}>
            <span className="search-icon">
                <CiSearch />
            </span>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
            />
        </div>
    )
}

export default Searchbar
