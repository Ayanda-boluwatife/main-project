import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import './SideNavBar.css'
import { BiPhone } from 'react-icons/bi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TiDocumentText } from 'react-icons/ti'
import { BsPersonCheck, BsBuildings } from 'react-icons/bs'
import { AiOutlineSetting } from 'react-icons/ai'
import { GrGroup, GrDocumentVerified, GrProjects } from 'react-icons/gr'

const SideNavBar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [active, setActive] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMenuItemClick = (key) => {
    setActiveItem(key);
    setActive(key);
    setShowDropdown(false);
  };

  const isActive = (key) => {
    return activeItem === key ? "active" : "";
  };

  const isAct = (key) => {
    return active === key ? "activer" : "";
  };

  return (
    <div className="dashboard">
      <div className="side-bar">
        <p className="logo">Logo</p>
        <div className="p-detail">
          <img src='/images/Ellipse.png' alt="profile" className="profile-image" />
          <p className="p-name">John Doe</p>
          <div><p className="title">Owner</p></div>
        </div>

        <p className="account">ACCOUNT</p>
        <div className="custom-menu">
          <div className={`menu-item ${isActive("/compliance")}`} onClick={handleDropdownClick}>
            <span><GrProjects /></span> Compliance <span className="dropdown-icon"><MdKeyboardArrowDown /></span>
          </div>
          {showDropdown && (
            <div className="dropdown-content">
              <div className={`dropdown-item ${isAct("/business-info")}`} onClick={() => handleMenuItemClick("/business-info")}>
                <span><BsBuildings /></span> Business Information
              </div>
              <div className={`dropdown-item ${isAct("/owner")}`} onClick={() => handleMenuItemClick("/owner")}>
                <span><BsPersonCheck /></span> Owners Information
              </div>
              <div className={`dropdown-item ${isAct("/contact")}`} onClick={() => handleMenuItemClick("/contact")}>
                <span><BiPhone /></span> Contact Details
              </div>
              <div className={`dropdown-item ${isAct("/document")}`} onClick={() => handleMenuItemClick("/document")}>
                <span><TiDocumentText /></span> Document
              </div>
            </div>
          )}
          <div className={`menu-item ${isActive("/profile")}`} onClick={() => handleMenuItemClick("/profile")}>
            <span><CgProfile /></span> Profile
          </div>
          <div className={`menu-item ${isActive("/business")}`} onClick={() => handleMenuItemClick("/business")}>
            <span><GrDocumentVerified /></span> Business Detail
          </div>
          <div className={`menu-item ${isActive("/team")}`} onClick={() => handleMenuItemClick("/team")}>
            <span><GrGroup /></span> Team
          </div>
          <div className={`menu-item ${isActive("/setting")}`} onClick={() => handleMenuItemClick("/setting")}>
            <span><AiOutlineSetting /></span> Settings
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
