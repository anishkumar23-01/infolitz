import React, { useState } from 'react'
import './Sidebar.css'
import { SidebarData } from '../../Data/Data';
function Sidebar() {
    const [selected, setSelected] = useState(0)
  return (
    <div className="Sidebar">
        <div className="logo">
            <span>Patient</span>
        </div>
        <div className="menu">
            
            {SidebarData.map((item, index) => {
                return (
                     <div className={selected===index?'menuItem active':'menuItem'}
                     key = {index}
                     onClick = {()=> setSelected(index)}>
                         <span><item.icon/></span>
                <span>{item.heading}</span>
            </div>
                )
            })}
        </div>
    </div>
  )
}

export default Sidebar