import { useState } from "react";
import React from "react";
import NavStyle from "../css/navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineFileSearch } from "react-icons/ai";

const Navbar = () => {
    const  [visible, setVisible] = useState(true);
    function ToggleBurger(){
        setVisible(!visible);
    };
  return (
    <>
      <div className={NavStyle.navContainer}>
        <nav className={NavStyle.nav}>
        <div className={NavStyle.buger} onClick={ToggleBurger}>
          MENU
          <GiHamburgerMenu size={22} />
        </div>

        
            
          <ul className={visible ? NavStyle.ulItem: NavStyle.show} >
            <li>
              <a href="/">HOMEPAGE</a>
            </li>

            <div className={NavStyle.dropDown}>
              <a href="/" className={NavStyle.subMenu}>
                WHO WE ARE
              </a>
              
            </div>
            <div className={NavStyle.dropDown}>
              <a href="/" className={NavStyle.subMenu}>
                OUR SERVICES
              </a>
             
            </div>

            <li>
              <a href="/">RISK MANAGEMENT & INSURANCE</a>
            </li>
            <li>
              <a href="/">CONTACT</a>
            </li>
          </ul>
        </nav>
       
        <div className={NavStyle.SIcon}>
            {/* <AiOutlineFileSearch size={24} /> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;