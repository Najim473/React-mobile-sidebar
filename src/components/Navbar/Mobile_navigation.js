import React from 'react'
import {useState} from 'react';
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from './Navbar_data'
import mobnStyle from './Mobile_navigation.module.css';
import {Link} from 'react-router-dom'
function Mobile_navigation() {
const [sidebar, setSidebar] = useState(false);  
  const showSidebar =()=>{
    setSidebar(!sidebar);
  };
  return (
    <>
      <nav className ={mobnStyle.Mobile_navigation}>
        <div className={mobnStyle.Mobile_navbar}>
          <div className={ sidebar ? mobnStyle.closeMenu : mobnStyle.openMenu }>
          <Link to='#' className={mobnStyle.menu_bars}>
          <FiMenu className={mobnStyle.openicon} onClick={showSidebar}></FiMenu>
          </Link>
          </div>
          <div className={sidebar ? mobnStyle.openMenu : mobnStyle.closeMenu}>
            <Link to='#' className={mobnStyle.menu_bars}>
          <AiOutlineClose className={mobnStyle.closeicon} onClick={showSidebar}></AiOutlineClose>
            </Link>
          </div>
        </div>
<nav className={sidebar ? [mobnStyle.nav_menu, mobnStyle.active].join(' ') : mobnStyle.nav_menu}>
<ul onClick={showSidebar}> 
  {SidebarData.map((item,index)=>{
    return (
      <>
      <li key={index} className={mobnStyle.nav_text}>
      <Link to={item.path}>
      {/* <span>{item.icons}</span> */}
      <span>{item.title}</span>
      </Link>
      </li>
      </>
    )
  }) }
       </ul>
</nav>
      </nav>
    </>
  )
}

export default Mobile_navigation