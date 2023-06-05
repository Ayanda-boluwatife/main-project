import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./Components/DashBoard";
import AddOwner from "./Components/Main/AddOwner";

const App = () => {
  return(
    <div>
      {/* <DashBoard /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/add-owner" element={<AddOwner />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;