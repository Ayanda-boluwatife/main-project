import React from 'react'
import './MainDashboard.css'

const MainDashboard = () => {
  return (
    <section>
      <div className="table-head">
        <table>
          <tr>
              <th>Owner-Info</th>
              <th>Email</th>
              <th>Phone-number</th>
              <th>Address</th>
          </tr>
          <tr className="border">
              <td><div className='user-info'><img src="/images/1.png" alt="" /> <span>John Doe</span></div></td>
              <td>johndoe@gmail.com</td>
              <td>091987654321</td>
              <td>58 Asa-dam Road</td>
          </tr>
          <tr className="border">
              <td><div className='user-info'><img src="/images/2.png" alt="" /> <span>Sarah Dimmesk</span></div></td>
              <td>sarah@gmail.com</td>
              <td>091987654321</td> 
              <td>58 Asa-dam Road</td>
          </tr>
          <tr className="border">
              <td><div className='user-info'><img src="/images/3.png" alt="" /> <span>Gabriel Kotesky</span></div></td>
              <td>gabriel@gmail.com</td>
              <td>091987654321</td>
              <td>58 Asa-dam Road</td>
          </tr>
          <tr className="border">
              <td><div className='user-info'><img src="/images/4.png" alt="" /> <span>Katrina Johnson</span></div></td>
              <td>katrina@gmail.com</td>
              <td>091987654321</td>
              <td>58 Asa-dam Road</td>
          </tr>
          <tr className="border">
              <td><div className='user-info'><img src="/images/5.png" alt="" /> <span>James Berry</span></div></td>
              <td>james@gmail.com</td>
              <td>091987654321</td>
              <td>58 Asa-dam Road</td>
          </tr>
        </table>
      </div>
    </section>
  )
}

export default MainDashboard