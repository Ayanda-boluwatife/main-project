import React from 'react'
import SideNavBar from '../SideNavBar/SideNavBar'
import SearchBar from './SearchBar'

const AddOwner = () => {
  return (
    <section>
        <div className="side">
            <SideNavBar />
        </div>
        <div className="main">
            <SearchBar />
            <div>
                <h1>Owner Details</h1>
                <p>Fill your business personal information in the input below</p>
            </div>
            <form action="#">
               <div className="row-one">
                <div className="label">
                        <label htmlFor="">Owner Full-Name</label>
                        <input type="text" placeholder="John Doe" required/>
                    </div>
                    <div className="label">
                        <label htmlFor="">Owner Email</label>
                        <input type="text" placeholder="Johndoe@gmail.com" required/>
                    </div>
               </div>
                <div className="row-two">
                    <div className="label">
                        <label htmlFor="">Country Code</label>
                        <select name="" id="">
                            <option>+234</option>
                            <option>+234</option>
                            <option>+234</option>
                            <option>+234</option>
                            <option>+234</option>
                            <option>+234</option>
                            <option>+234</option>
                        </select>
                    </div>
                    <div className="label">
                        <label htmlFor="">Phone No.</label>
                        <input type="number" placeholder='eg 9115819983' required/>
                    </div>
                </div>
                <div className="row-three">
                    <div className="label">
                        <label htmlFor="">Address</label>
                        <input type="number" placeholder='e.g 58 tanke road, ilorin, kwara state' required/>
                    </div>
                    <div className="label">
                        <label htmlFor="">Nationalty</label>
                        <select name="" id="">
                            <option value="">Nigeria</option>
                            <option value="">America</option>
                            <option value="">Angolia</option>
                            <option value="">Niger</option>
                            <option value="">Australia</option>
                            <option value="">Canada</option>
                            <option value="">United Kingdom</option>
                        </select>
                    </div>
                </div>

                <div className="send">
                    <a href="/done">Send Invite</a>
                </div>
            </form>
        </div>
    </section>
  )
}

export default AddOwner