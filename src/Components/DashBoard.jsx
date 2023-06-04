import React from 'react'
import SideNavBar from './SideNavBar/SideNavBar'
import SearchBar from './Main/SearchBar'
import './Dashboard.css'
import MainDashboard from './Main/MainDashboard'

const DashBoard = () => {
  return (
    <section>
        <div className='side'>
            <SideNavBar />
        </div>
        <div className='main'>
            <SearchBar />
            <MainDashboard />
        </div>
    </section>
  )
}

export default DashBoard