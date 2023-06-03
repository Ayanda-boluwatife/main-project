import React from 'react'
import { GrNotification } from 'react-icons/gr'
import { BsSearch } from 'react-icons/bs'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <section>
        <div className="search">
            <span><BsSearch /></span>
            <input type="search" name="search" placeholder="Search" />
        </div>
        <div className="profile">
            <span><GrNotification /></span>
            <div className='inner-pro'>
                <img src="/images/Ellipse.png" alt="" />
                <h1>John Doe</h1>
            </div>
        </div>
    </section>
  )
}

export default SearchBar