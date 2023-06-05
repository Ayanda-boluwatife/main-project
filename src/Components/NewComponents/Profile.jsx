import React from 'react'
import './Profile.css'
import SideNavBar from '../SideNavBar/SideNavBar'
import SearchBar from '../Main/SearchBar'

const Profile = () => {
  return (
    <section id="profile">
        <div className="side">
            <SideNavBar />
        </div>
        <div className="main">
            <SearchBar />
            <div className="border-all">
                <div>
                    <h1>Profile</h1>
                    <p>Edit Your Personal Information</p>
                </div>
                <div className="form">
                    <form action="#">
                        <div className='flex top'>
                            <div className='width'>
                                <label htmlFor="">Full Name</label>
                                <input type="text" placeholder='eg John Doe'/>
                            </div>
                            <div className='width'>
                                <label htmlFor="">Email</label>
                                <input type="email" placeholder='eg Johndoe@core.com'/>
                            </div>
                        </div>
                        <div className='width top'>
                            <label>Phone No.</label>
                            <input type='number' placeholder='eg 091987654321' />
                        </div>
                        <div className='flex top'>
                            <div className='width-70'>
                                <label htmlFor="">Password</label>
                                <input type="password" name="" id="" />
                            </div>
                            <div className="btn-group">
                                <button type="submit">Change Password</button>
                            </div>
                        </div>
                    </form>

                    <div className="verification-step">
                        <div className='flex-no-gap'>
                            <div>
                                <img src='images/two-step.png' alt='two-step' />
                            </div>
                            <div>
                                <h1>Two Factors Authentication</h1>
                                <p>upload your proof of your address to identify your information. you have options to choose from e.g nepa bills etc.</p>
                            </div>
                        </div>
                        <div className="verify-btn">
                            <button type="submit">Verify Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profile