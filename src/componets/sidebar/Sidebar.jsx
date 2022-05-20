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
        <div className='wrapper'>
        <div class="box box1">
        <div class="col-md-12 text-center">
            <span className='help'>Need help?</span>
            <button type="button" class="btn btn-success"><span>contact us</span></button>
        </div></div>

        </div>
    </div>
  )
}

export default Sidebar