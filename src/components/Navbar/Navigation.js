import React from 'react'
import naviStyle from './Navigation.module.css'
import { Link } from 'react-router-dom'
import { SidebarData } from './Navbar_data'
function Navigation() {
  return (
    <div className={naviStyle.NavBar}>
      <div className={naviStyle.Navigation}>
       <ul>
  {SidebarData.map((item,index)=>{
    return (
      <>
      <li key={index}>
      <Link to={item.path}>
      <span className={naviStyle.icons}>{item.icons}</span>
      <span>{item.title}</span>
      </Link>
      </li>
      </>
    )
  }) }
       </ul>
      </div>
    </div>
  )
}

export default Navigation