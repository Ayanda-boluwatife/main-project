import React from 'react'
import SideNavBar from './SideNavBar/SideNavBar'
import SearchBar from './Main/SearchBar'
import './Dashboard.css'
import MainDashboard from './Main/MainDashboard'
import { BsPlus } from 'react-icons/bs'

const DashBoard = () => {
  return (
    <section>
        <div className='side'>
            <SideNavBar />
        </div>
        <div className='main'>
            <SearchBar />
            <div className="header">
              <div className="left">
                <h2>Owner Information</h2>
                <p>Add co-founders or partners to the platform</p>
              </div>
              <div className="right">
                <a href="." className="btn">
                  <BsPlus />
                  Add Owner
                </a>
              </div>
            </div>
            <MainDashboard />
        </div>
    </section>
  )
}

export default DashBoard