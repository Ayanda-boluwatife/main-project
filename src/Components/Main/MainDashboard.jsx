import React from 'react'
import './MainDashboard.css'

const MainDashboard = () => {
  return (
    <section>
      <div className="table-head">
        <table>
          <tr>
              <th>Owner image</th>
              <th>Email</th>
              <th>Phone-number</th>
              <th>Address</th>
          </tr>
          <tr>
              <td><img src="/images/1.png" alt="" /> <span>John Doe</span></td>
              <td>johndoe@gmail.com</td>
              <td>091987654321</td>
              <td>58 Asa-dam Road</td>
          </tr>
          <tr>
              <td><img src="/images/2.png" alt="" /> <span>Sarah Dimmesk</span></td>
              <td>sarahdimmesk@gmail.com</td>
              <td>091987654321</td> 
              <td>58 Asa-dam Road</td>
          </tr>
          <tr>
              <td><img src="/images/3.png" alt="" /></td>
              <td>johndoe@gmail.com</td>
              <td>091987654321</td>
              <td>58 Asa-dam Road</td>
          </tr>
          <tr>
              <td><img src="/images/4.png" alt="" /></td>
              <td>johndoe@gmail.com</td>
              <td>091987654321</td>
              <td>58 Asa-dam Road</td>
          </tr>
          <tr>
              <td><img src="/images/5.png" alt="" /></td>
              <td>johndoe@gmail.com</td>
              <td>091987654321</td>
              <td>58 Asa-dam Road</td>
          </tr>
        </table>
      </div>
    </section>
  )
}

export default MainDashboard