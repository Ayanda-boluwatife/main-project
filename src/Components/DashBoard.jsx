import React from 'react'
import SideNavBar from './SideNavBar/SideNavBar'
import SearchBar from './Main/SearchBar'
import './Dashboard.css'

const DashBoard = () => {
  return (
    <section>
        <div className='side'>
            <SideNavBar />
        </div>
        <div className='main'>
            <SearchBar />
        </div>
    </section>
  )
}

export default DashBoard