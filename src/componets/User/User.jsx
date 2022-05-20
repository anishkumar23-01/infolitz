import React from 'react'
import Card from '../Card/Card'
import './User.css'
// import {FontAwesomeIcon} from 'react-icons'
function User() {
    
  return (
    <div className="user">
        <ui id="contact_ul">
          <li><i style={{paddingTop: '2em', paddingRight: '1rem'}} class="bi bi-search"></i><input style = {{border:'hidden'}}type="search" placeholder='search'/></li>
        </ui>
        
        
        <div className='heading'>
        <h4>My patients Profiles</h4>
        </div>
        <Card/>
    </div>
  )
}

export default User