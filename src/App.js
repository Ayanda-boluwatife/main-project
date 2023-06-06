import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./Components/DashBoard";
import AddOwner from "./Components/Main/AddOwner";
import Profile from "./Components/NewComponents/Profile";
// import AddTeam from "./Components/NewComponents/AddTeam";

const App = () => {
  return(
    <div>
      {/* <DashBoard /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/add-owner" element={<AddOwner />} />
          <Route path='/profile' element={<Profile />} />
          {/* <Route path='/add-team' element={<AddTeam />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;